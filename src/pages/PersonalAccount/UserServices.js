import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {userInfo} from "../../API/users";
import Loader from "../../components/Loader";
import ServiceCard from "../../components/ServiceCard";
import {deleteService} from "../../API/services";
import CustomModal from "../../components/CustomModal";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../../store/actions/alert"

export default function UserServices() {

    const currentUser = useCurrentUser()
    const axiosPrivate = useAxiosPrivate()
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [userService, setUserService] = useState({
        isLoading: false,
        data: []
    })
    const currentToken = useAccessToken()
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        currentUser && userInfo(currentUser?.id).then(res => setUserService({isLoading: true, data: res.services}))
        window.scrollTo(0, 0)
    }, [currentUser?.id])

    const [serviceId, setServiceId] = useState(null)

    return (
        <div className="px-2 px-sm-4 px-xxl-5 pb-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои услуги</h4>
            {(userService?.data?.length > 0) && <div className='mb-4'>
                <NavLink to="create" className="btn btn-1 fs-12 mx-auto mt-4 mt-xl-5">Создать услугу</NavLink>
            </div>}
            {userService.isLoading
                ? (userService?.data?.length !== 0)
                    ? userService.data.map(service => (
                        <ServiceCard
                            servicesTypesSubServiceId={service.servicesTypesSubServiceId}
                            experienceTypeForUser={service.experienceTypeForUser}
                            description={service.description}
                            key={service.id}
                            id={service.id}
                            labels={service.labels}
                            serviceType={service.subService.type.name}
                            callback={(id) => {
                                setServiceId(id)
                                setShowModalDelete(true)
                            }}
                        />
                    ))
                    : <div>
                        <img src="/img/services-gray.svg" alt="услуги"
                             className="img-fluid d-block mx-auto mb-4 mb-xl-5"/>
                        <div className="fs-12 text-center">Предоставляете услуги риелтора, дизайнера, ремонтного
                            рабочего или грузоперевозчика? <br/> Создайте объявление об услугах и находите заказчиков.
                        </div>
                        <Link to="create" className="btn btn-1 fs-12 mx-auto mt-4 mt-xl-5">Создать</Link>
                    </div>
                : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
            }

            <CustomModal
                isShow={showModalDelete}
                setIsShow={setShowModalDelete}
                closeButton={true}
            >
                <div>
                    <div className="text-center fs-15 fw-6 title-font my-5">Вы уверены что хотите удалить услугу?</div>
                    <div className="row row-cols-2">
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowModalDelete(false)}
                                className="btn btn-2 w-100 fs-11 text-uppercase"
                            >
                                Отмена
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-1 w-100 fs-11 text-uppercase"
                                onClick={() => {
                                    deleteService(axiosPrivate, serviceId, currentToken)
                                        .then(() => {
                                            userInfo(currentUser?.id).then(res => setUserService({
                                                isLoading: true,
                                                data: res.services
                                            }))
                                            setShowModalDelete(false)
                                            setAlert('success', true, 'Услуга успешно удалена')
                                        })
                                        .catch(() => {
                                            setShowModalDelete(false)
                                            setAlert('danger', true, 'Произошла ошибка сервера')
                                        })
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </CustomModal>
        </div>
    )
}
