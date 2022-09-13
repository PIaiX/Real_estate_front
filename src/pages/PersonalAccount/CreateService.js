import React, {useEffect, useState} from 'react';
import CustomSelect from '../../components/CustomSelect';
import {Link, useNavigate, useParams} from 'react-router-dom';
import InputTags from '../../components/InputTags';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import {createService, getService, getServicesTypes, getSubServicesTypes, updateService} from "../../API/services";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../../store/actions/alert"

export default function CreateService() {

    const axiosPrivate = useAxiosPrivate()
    const currentUser = useCurrentUser()
    const currentToken = useAccessToken()
    const {id} = useParams()
    const navigate = useNavigate()
    const [deleteId, setDeleteId] = useState(null)
    const [tags, setTags] = useState([])
    const [loadService, setLoadService] = useState({})
    const [servicesType, setServicesType] = useState([])
    const [subServiceType, setSubServiceType] = useState([])
    const [subServiceSelect, setSubServiceSelect] = useState({
        value: null,
        title: ''
    })
    const [serviceSelect, setServiceSelect] = useState({
        value: null,
        title: '',
    })
    const [experienceSelect, setExperienceSelect] = useState({
        value: null,
        title: ''
    })
    const [payloads, setPayloads] = useState({})
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        setPayloads(prevState => ({
            ...prevState,
            userId: currentUser?.id,
            token: currentToken,
            labels: tags.join(', ')
        }))
    }, [currentUser, currentToken, tags])

    useEffect(() => {
        getServicesTypes(axiosPrivate)
            .then(res => {
                setServicesType(res.map(i => ({title: i.name, value: i.id})))
            })
    }, [])

    useEffect(() => {
        (serviceSelect?.value) && getSubServicesTypes(axiosPrivate, serviceSelect?.value)
            .then(res => {
                setSubServiceType(res.map(i => ({title: i.name, value: i.id})))
            })
    }, [serviceSelect?.value])

    const fields = {
        isInValidServicesTypesSubServiceId: false,
        isInValidExperienceType: false,
        isInValidDescription: false
    }

    const [valid, setValid] = useState(fields);

    const createNewService = (e) => {
        e.preventDefault()

        const isInValidServicesTypesSubServiceId = payloads?.servicesTypesSubServiceId === undefined
        const isInValidExperienceType = payloads.experienceType === undefined
        const isInValidDescription = payloads.description === undefined || payloads.description.length < 5

        if (isInValidServicesTypesSubServiceId) {
            setValid({...valid, isInValidServicesTypesSubServiceId: true})
        } else if (isInValidExperienceType) {
            setValid({...valid, isInValidExperienceType: true})
        } else if (isInValidDescription) {
            setValid({...valid, isInValidDescription: true})
        } else {
            createService(axiosPrivate, payloads)
                .then(() => {
                    setAlert('success', true, 'Услуга успешно создана, переход в мои услуги')
                    setTimeout(() => {
                        navigate('/personal-account/my-services')
                    }, 2000)
                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка сервера')
                })
        }
    }

    const resetFieldVal = (newState, field) => {
        setValid({...valid, [field]: false})
    }

    useEffect(() => {
        id && getService(axiosPrivate, id).then(res => {
            setLoadService(res)
        })
    }, [])

    useEffect(() => {
        if (id) {
            setPayloads(prevState => ({
                ...prevState,
                servicesTypesSubServiceId: loadService.servicesTypesSubServiceId,
                experienceType: loadService.experienceType,
                description: loadService.description,
                experienceTypeForUser: loadService.experienceTypeForUser,
            }))
        }
    }, [loadService, id])


    useEffect(() => {
        setServiceSelect(servicesType?.find(i => i?.value === loadService?.subService?.servicesTypeId))
    }, [servicesType, loadService])

    useEffect(() => {
        setSubServiceSelect(subServiceType?.find(i => i?.value === loadService?.servicesTypesSubServiceId))
    }, [subServiceType, loadService])

    const expYears = ["Менее 1 года", "До 3 лет", "До 6 лет", "До 10 лет"]

    useEffect(() => {
        let item = {}
        expYears.find((i, index) => {
            if (index === loadService.experienceType) {
                return item = {title: i, value: index}
            }
        })
        setExperienceSelect(item)
    }, [loadService])

    return (
        <div className="px-2 px-sm-4 px-xxl-5 pb-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои услуги</h4>
            <form>
                <div className="row align-items-center mb-3 mb-sm-4 mb-xl-5">
                    <div className="col-sm-4">
                        <div className="fs-11 mb-1">Вид услуг:</div>
                    </div>
                    <div className="col-sm-8">
                        <CustomSelect
                            className="w-100 fs-11"
                            btnClass="inp"
                            checkedOptions={[serviceSelect?.title]}
                            options={servicesType}
                            callback={({title, value}) => {
                                setServiceSelect({value, title})
                            }}
                        />
                    </div>
                </div>
                <div className="row align-items-center mb-3 mb-sm-4 mb-xl-5">
                    <div className="col-sm-4">
                        <div
                            className="fs-11 mb-1"
                            style={{color: valid.isInValidServicesTypesSubServiceId ? '#DA1E2A' : ''}}
                        >
                            Подуслуга:
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <CustomSelect
                            className="w-100 fs-11"
                            btnClass="inp"
                            checkedOptions={[subServiceSelect?.title]}
                            options={subServiceType}
                            callback={({title, value, e}) => {
                                setSubServiceSelect({value, title})
                                setPayloads(prevState => ({...prevState, servicesTypesSubServiceId: value}))
                                resetFieldVal(e, 'isInValidServicesTypesSubServiceId')
                            }}
                        />
                    </div>
                </div>
                <div className="row align-items-center mb-3 mb-sm-4 mb-xl-5">
                    <div className="col-sm-4">
                        <div
                            className="fs-11 mb-1"
                            style={{color: valid.isInValidExperienceType ? '#DA1E2A' : ''}}
                        >
                            Опыт работы:
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <CustomSelect
                            className="w-100 fs-11"
                            btnClass="inp"
                            checkedOptions={[experienceSelect?.title]}
                            options={expYears}
                            callback={({title, value, e}) => {
                                setExperienceSelect({value, title})
                                setPayloads(prevState => ({...prevState, experienceType: value}))
                                resetFieldVal(e, 'isInValidExperienceType')
                            }}
                        />
                    </div>
                </div>
                <div className="row mb-3 mb-sm-4 mb-xl-5">
                    <div className="col-sm-4">
                        <div className="fs-11 mb-1">Предоставляемые услуги:</div>
                    </div>
                    <div className="col-sm-8">
                        <InputTags
                            labels={loadService.labels}
                            name="services"
                            placeholder="вводите услуги по 1 и без повторений"
                            callback={(tags) => setTags(tags)}
                        />
                    </div>
                </div>
                <div className="row mb-3 mb-sm-4 mb-xl-5">
                    <div className="col-sm-4">
                        <div
                            className="fs-11 mb-1"
                            style={{color: valid.isInValidDescription ? '#DA1E2A' : ''}}
                        >
                            О себе:
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <textarea
                            placeholder="Введите текст"
                            rows="5"
                            style={{fontSize: 16 + 'px'}}
                            value={payloads?.description || ''}
                            onChange={(e) => {
                                setPayloads(prevState => ({...prevState, description: e.target.value}))
                                resetFieldVal(e, 'isInValidDescription')
                            }}
                        />
                        <span style={{color: '#828282'}}>Не меньше 5 символов</span>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-sm-8">
                        <div className="row row-cols-2">
                            <div><Link to="/personal-account/my-services"
                                       className="btn btn-2 w-100 fs-11">Отмена</Link></div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-1 w-100 fs-11"
                                    onClick={(e) => {
                                        (id)
                                            ? updateService(axiosPrivate, payloads, id)
                                                .then(() => {
                                                    setAlert('success', true, 'Услуга успешно создана, переход в мои услуги')
                                                    setTimeout(() => {
                                                        navigate('/personal-account/my-services')
                                                    }, 2000)
                                                })
                                                .catch(() => {
                                                    setAlert('danger', true, 'Произошла ошибка сервера')
                                                })
                                            : createNewService(e)
                                    }}
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
