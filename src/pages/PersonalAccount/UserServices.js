import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {userInfo} from "../../API/users";
import Loader from "../../components/Loader";
import ServiceCard from "../../components/ServiceCard";
import {deleteService} from "../../API/services";
import CustomModal from "../../components/CustomModal";

export default function UserServices() {

    const currentUser = useCurrentUser()
    const axiosPrivate = useAxiosPrivate()
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [userService, setUserService] = useState({
        isLoading: false,
        data: []
    })
    const currentToken = useAccessToken()

    useEffect(() => {
        currentUser && userInfo(currentUser?.id).then(res => setUserService({isLoading: true, data: res.services}))
    }, [currentUser?.id])

    console.log(userService)
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
                    :<div>
                        <img src="/img/services-gray.svg" alt="услуги" className="img-fluid d-block mx-auto mb-4 mb-xl-5"/>
                        <div className="fs-12 text-center">Предоставляете услуги риелтора, дизайнера, ремонтного рабочего или грузоперевозчика? <br /> Создайте объявление об услугах и находите заказчиков. </div>
                        <Link to="create" className="btn btn-1 fs-12 mx-auto mt-4 mt-xl-5">Создать</Link>
                    </div>
                :<div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
            }


            {/* если указаны услуги */}
            {/*<div className="row align-items-center mb-4 mb-xl-5">
                <div className="col-sm-4">
                    <div className="fs-11 mb-2 mb-sm-0">Вид услуг:</div>
                </div>
                <div className="col-sm-8">
                    <div className="fs-11">Дизайн</div>
                </div>
            </div>
            <div className="row align-items-center mb-4 mb-xl-5">
                <div className="col-sm-4">
                    <div className="fs-11 mb-2 mb-sm-0">Опыт работы:</div>
                </div>
                <div className="col-sm-8">
                <div className="fs-11">От 1 года</div>
                </div>
            </div>
            <div className="row mb-4 mb-xl-5">
                <div className="col-sm-4">
                    <div className="fs-11 mb-2 mb-sm-0">Предоставляемые услуги:</div>
                </div>
                <div className="col-sm-8">
                    <div className="tag-list">
                        <div className="tag">
                            <span>Проектирование</span>
                        </div>
                        <div className="tag">
                            <span>Визуализация</span>
                        </div>
                        <div className="tag">
                            <span>Освещение</span>
                        </div>
                        <div className="tag">
                            <span>Курирование проекта</span>
                        </div>
                        <div className="tag">
                            <span>Создание макета</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4 mb-xl-5">
                <div className="col-sm-4">
                    <div className="fs-11 mb-2 mb-sm-0">О себе:</div>
                </div>
                <div className="col-sm-8">
                    <div className="fs-11">Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре одтелочных материалов, мебели и текстиля. Примеры работ в личных собщениях.</div>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-sm-8">
                    <div className="row row-cols-2 align-items-center g-2 g-sm-4">
                        <div>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#delete-service" className="w-100 fs-12 color-1 d-flex align-items-center">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.785714 12.4444C0.785714 13.3 1.49286 14 2.35714 14H8.64286C9.50714 14 10.2143 13.3 10.2143 12.4444V3.11111H0.785714V12.4444ZM11 0.777778H8.25L7.46429 0H3.53571L2.75 0.777778H0V2.33333H11V0.777778Z" fill="#146492"/>
                                </svg>
                                <span className="ms-1 ms-sm-2">Удалить услугу</span>
                            </button>
                        </div>
                        <div>
                            <Link to="create" className="btn btn-1 fs-12 w-100">Редактировать</Link>
                        </div>
                    </div>
                </div>
            </div>*/}

            <CustomModal
                isShow={showModalDelete}
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
                            onClick={() => deleteService(axiosPrivate, serviceId, currentToken)
                                .then(() => {
                                    userInfo(currentUser?.id).then(res => setUserService({isLoading: true, data: res.services}))
                                    setShowModalDelete(false)
                                })}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
                </div>
            </CustomModal>

            {/*<div className="modal fade" id="delete-service" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <div className="text-center fs-15 fw-6 title-font my-5">Вы уверены что хотите удалить услугу?</div>
                            <div className="row row-cols-2">
                                <div>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-2 w-100 fs-11 text-uppercase">Отмена</button>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-1 w-100 fs-11 text-uppercase"
                                        onClick={() => deleteService(axiosPrivate, serviceId, currentToken)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}
