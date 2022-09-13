import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import UserCard from '../../components/UserCard';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {createResponse} from '../../API/responses';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from "../../API/users";
import {bindActionCreators} from "redux";
import alertActions from "../../store/actions/alert"

export default function AddResponse() {

    const {id} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const token = useSelector(state => state?.accessToken)
    const userId = useSelector(state => state?.currentUser?.id)
    const [response, setResponse] = useState('')
    const {setSubmitAlert, getAlertNode} = useAlert(3000)
    const [userInf, setUserInf] = useState({})
    const loc = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    const onSubmit = () => {
        let payloads = {
            userId,
            serviceId: loc?.state?.serviceId
        }
        if (response?.length) {
            payloads.description = response
        }

        createResponse(axiosPrivate, token, payloads)
            .then(() => {
                setAlert('success', true, 'Отклик успешно отправлен, возвращаем вас назад')
                setTimeout(() => {navigate(loc?.state?.prevUrl)}, 2000)
            })
            .catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
    }

    useEffect(() => {
        userInfo(id).then(res => setUserInf(res))
    }, [id])

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            {getAlertNode()}
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Добавление отклика</h4>

            <div className="row row-cols-sm-2 row-cols-xxl-1 px-4 px-sm-0 g-3 g-md-4">
                <div>
                    <UserCard
                        inAddResponse={false}
                        id={userInf.id}
                        userName={userInf?.fullName}
                        link={`/user/${userInf?.id}`}
                        photo={userInf?.avatar}
                        rating={userInf?.rating}
                        service={loc?.state?.service}
                        exp={loc?.state?.exp}
                        description={loc?.state?.description}
                        phone={loc?.state?.phone}
                        labels={loc?.state?.labels}
                    />
                </div>
                <div>
                    <form
                        className='form-response shad-box p-3 p-xl-4 p-xxl-5'
                        onSubmit={e => {
                            e.preventDefault()
                            onSubmit()
                        }}
                    >
                        <h4 className='color-1 mb-2 mb-xl-4'>Добавить отклик</h4>
                        <textarea
                            className='d-block'
                            rows={10}
                            placeholder='Напишите ваши пожелания заказчику'
                            value={response}
                            onChange={e => setResponse(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='btn btn-1 mt-3'
                        >
                            Откликнуться
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}