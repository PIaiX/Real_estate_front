import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import ShowPhone from '../components/ShowPhone';
import {Slider1} from '../components/Slider1';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {
    addReportReview,
    CreateReview,
    deleteReportReview,
    getReviewsInUsersPage,
    userInfoInUserPage,
} from "../API/userspage";
import {useAccessToken, useCurrentUser} from "../store/reducers";
import Rating from "react-rating";
import BtnRep from "../components/BtnRep";
import Breadcrumbs from "../components/Breadcrumbs";
import {checkPhotoPath} from "../helpers/photo";
import {emitCreateWithoutTopicMessage} from '../API/socketConversations';
import CustomModal from '../components/CustomModal';
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert"
import {useDispatch} from 'react-redux';

export default function UserPage({routeName}) {

    const user = useCurrentUser()
    const token = useAccessToken()
    const axiosPrivate = useAxiosPrivate()
    const {userId} = useParams()
    const {page} = useParams()
    const loc = useLocation()
    const [reviews, setReviews] = useState([])
    const [limit, setLimit] = useState(2)
    const [userInformation, setUserInformation] = useState([])
    const [data, setData] = useState({})
    const [reviewStatus, setReviewStatus] = useState(false)
    const adRef = useRef(null)
    // write message modal
    const initialSendMessagePayloads = {
        userId: null
    }
    const [sendMessagePayloads, setSendMessagePayloads] = useState(initialSendMessagePayloads)
    const [messageInput, setMessageInput] = useState('')
    const [messageInputError, setMessageInputError] = useState('')

    // alert actions
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const resetMessage = () => {
        setMessageInput('')
        setMessageInputError('')
        setSendMessagePayloads(initialSendMessagePayloads)
    }

    const onSendMessage = (e) => {
        e.preventDefault()
        const message = messageInput.trim()

        if (message.length) {
            emitCreateWithoutTopicMessage(sendMessagePayloads.userId, {
                conversationId: 0,
                text: messageInput
            })
                .then(() => {
                    setAlert('success', true, 'Сообщение отправлено')
                    resetMessage()
                })
                .catch(() => setAlert('danger', true,'Что-то пошло не так, не удалось отправить сообщение'))
        } else {
            setMessageInputError('Сообщение не должно быть пустым')
        }
    }

    const createReview = (e) => {
        e.preventDefault()
        CreateReview(axiosPrivate, data).then(() => {
            setReviewStatus(true)
            getReviewsInUsersPage(axiosPrivate, userId, page, user.id).then(res => setReviews(res))
        })
    }

    const addReportForReview = async (usersReviewId) => {
        await addReportReview(axiosPrivate, token, usersReviewId, user.id)
        getReviewsInUsersPage(axiosPrivate, userId, page, user.id).then(res => setReviews(res))
    }

    const deleteReportForReview = async (usersReviewId) => {
        await deleteReportReview(axiosPrivate, token, usersReviewId, user.id)
        getReviewsInUsersPage(axiosPrivate, userId, page, user.id).then(res => setReviews(res))
    }

    const cuterArray = (arr) => {
        const result = []
        for (let i = 0; i < Math.ceil(arr?.length/limit);i++) {
            result.push(arr.slice((i * limit), (i * limit) + limit))
        }
        return result
    }

    useEffect(() => {
        if (userId && user?.id) {
            setData(data => ({...data, "toId": userId, "fromId": user?.id, token, userReport: userInformation?.reportStatus}))
        }
    }, [userId, user?.id, token, userInformation])

    useEffect(() => {
        getReviewsInUsersPage(axiosPrivate, userId, page,user.id).then(res => setReviews(res))
    }, [user.id, userId])

    useEffect(() => {
        userInfoInUserPage(userId, user.id).then(res => setUserInformation(res?.body))
    }, [])

    useEffect(() => {
        if (adRef !== null) {
            if (loc?.state?.fromAd) {
                setTimeout(() => {
                    window.scrollTo({
                        left: 0,
                        top: adRef.current.offsetTop,
                        behavior: "smooth"
                    })
                }, 500)
            }
        }
    }, [loc?.state?.fromAd])

    return (
        <main>

            <Breadcrumbs currentRouteName={userInformation?.fullName || 'Имя пользователя'}/>

            <section id="sec-10" className="container">
                <div className="row">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mb-5">
                        <div className="row flex-md-row-reverse gx-2 gx-sm-4 gx-xl-5">
                            <div className="col-7 col-sm-8 col-md-9">
                                <div className="d-md-flex align-items-baseline mb-3">
                                    <h1 className="mb-0 me-4">{userInformation?.fullName}</h1>
                                    {/*<div className="fs-11 gray-3">Сейчас онлайн</div>*/}
                                </div>
                                <h4>{userInformation?.ownerTypeForUser}</h4>
                                <div className="fs-11 gray-3">На сайте с {userInformation?.createdAtForUser}</div>
                                <div className="d-flex align-items-center mt-2 mt-sm-4">
                                    <ShowPhone
                                        className="d-none d-md-flex flex-1"
                                        phone={userInformation?.phoneForUser}
                                    />
                                    <button
                                        type="button"
                                        className="d-none d-md-flex btn btn-1 px-3 w-100 flex-1 ms-4"
                                        onClick={() => userInformation?.id && setSendMessagePayloads(prev => ({
                                            ...prev,
                                            userId: userInformation.id
                                        }))}
                                    >
                                        Написать сообщение
                                    </button>
                                    <BtnRep
                                        userinfo={data}
                                        reportUserStatus={userInformation?.reportStatus}
                                        type="reportUser"
                                    />
                                </div>
                            </div>
                            <div className="col-5 col-sm-4 col-md-3">
                                <div className="user-photo">
                                    <img
                                        src={checkPhotoPath(userInformation?.avatar)}
                                        alt={userInformation?.fullName}/>
                                    {/*<div className="indicator online"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-xxl-9 mb-5">
                        <h4 className="text-center text-md-start mb-2 mb-sm-4">Предоставляемые услуги</h4>
                        {userInformation?.services?.length > 0
                            ?
                            userInformation?.services?.map(service => (
                                <div className="user-card page mt-3 mb-3" key={service.id}>
                                    <div className="title justify-content-md-start mb-2 mb-sm-4">
                                        <h4 className="mb-0">{service?.subService?.name}</h4>
                                        <div className="rating ms-4">
                                            <Rating
                                                readonly={true}
                                                initialRating={userInformation.rating}
                                                fractions={2}
                                                emptySymbol={<img
                                                    src="/img/icons/star-gray.svg"
                                                    alt="1"/>}
                                                fullSymbol={<img
                                                    src="/img/icons/star-blue.svg"
                                                    alt="1"/>}
                                            />
                                            <span>({userInformation?.rating})</span>
                                        </div>
                                    </div>
                                    <div className="desc mb-3 mb-sm-4">
                                        <div className="fs-11 fw-5 gray-2 mb-3">Опыт
                                            работы {service.experienceTypeForUser}</div>
                                        <div className="fw-3">
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                        {service?.labels?.map(i => <div className="serv" key={i.id}>{i.name}</div>)}
                                    </div>
                                </div>
                            ))
                            :
                            <div className="fs-11 text-center text-md-start">Пользователь не предоставляет услуг</div>
                        }
                    </div>
                        <div className="col-xl-10 col-xxl-9 mb-5">
                            {(reviews.data?.length === 0) ?
                                <>
                                    <h4 className="text-center text-md-start">Отзывы
                                        на {userInformation?.firstName} (0)</h4>
                                    <div className="fs-11 text-center text-md-start mb-4">Нет отзывов</div>
                                    <button
                                        disabled={userId === String(user?.id)}
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#write-review"
                                        className="btn btn-1 fs-11 mx-auto mx-md-0 mb-4"
                                    >
                                        Написать отзыв
                                    </button>
                                </>
                                :
                                <>
                                    <div className="d-sm-flex justify-content-between mb-4">
                                        <h4 className="text-center text-sm-start mb-0">
                                            Отзывы на {userInformation?.firstName} ({reviews.meta?.total})
                                        </h4>
                                        <button
                                            disabled={(userId === String(user?.id)) || reviewStatus || userInformation?.reviewStatus}
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#write-review"
                                            className="mx-auto mx-sm-0 mt-3 mt-sm-0 btn btn-1 fs-11"
                                        >
                                            Написать отзыв
                                        </button>
                                    </div>
                                    {cuterArray(reviews?.data)[0]?.map(i =>
                                        <div className="review mb-3" key={i.id}>
                                            <img
                                                src={checkPhotoPath(i?.from?.avatar)}
                                                alt={i.from?.fullName}
                                                className="photo d-none d-sm-block"/>
                                            <div className="ms-sm-4">
                                                <div className="d-flex align-items-center d-sm-block mb-2 mb-sm-0">
                                                    <div className="ms-3 ms-sm-0">
                                                        <h4>{i.from?.fullName}</h4>
                                                        <div className="rating mb-sm-3">
                                                            <span className="fs-12 ms-0">Оценка:</span>
                                                            <Rating
                                                                readonly={true}
                                                                initialRating={i?.rating}
                                                                fractions={2}
                                                                emptySymbol={<img
                                                                    src="/img/icons/star-gray.svg"
                                                                    alt="1"/>}
                                                                fullSymbol={<img
                                                                    src="/img/icons/star-blue.svg"
                                                                    alt="1"/>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>
                                                        {i?.description}
                                                    </p>
                                                </div>
                                                <div className="date fs-11 gray-3">{i?.createdAtForUser}</div>
                                                <button
                                                    type="button"
                                                    className="claiming color-1 fs-09"
                                                    onClick={() => {
                                                        (i?.reportStatus) ?
                                                            deleteReportForReview(i?.id)
                                                            :
                                                            addReportForReview(i?.id)
                                                    }}
                                                >
                                                    {i?.reportStatus ? "Разжаловать" : "Пожаловаться"}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {(reviews?.meta?.total > limit) &&
                                        <button
                                            type="button"
                                            className="fs-12 fw-5 color-1 mx-auto bb-1"
                                            onClick={() => setLimit(limit + 2)}
                                        >
                                            Показать еще
                                        </button>
                                    }
                                </>
                            }
                        </div>
                        <div className="col-12 mb-5">
                            <h4 className="text-center text-md-start" ref={adRef}>Объявления пользователя</h4>
                            {(userInformation?.realEstates?.length === 0)
                                ?
                                <div className="fs-11 text-center text-md-start">Нет актуальных объявлений</div>
                                :
                                <div className="position-relative">
                                    <Slider1 userAds={userInformation?.realEstates} routeName={routeName}/>
                                </div>
                            }
                        </div>
                    </div>
            </section>

            <div className="mobile-btns d-block d-md-none py-2 py-sm-3">
                <div className="container">
                    <div className="row row-cols-2 gx-2 gx-sm-3">
                        <div>
                            <ShowPhone className="fs-12" phone="+ 7 (952) 879 78 65"/>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="fs-12 btn btn-1 w-100 px-2"
                                onClick={() => userInformation?.id && setSendMessagePayloads(prev => ({
                                    ...prev,
                                    userId: userInformation.id
                                }))}
                            >
                                Написать сообщение
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CustomModal
                isShow={sendMessagePayloads.userId}
                hideModal={() => resetMessage()}
                closeButton
            >
                <form className="message-form">
                    <div className="d-flex align-items-center">
                        <div className="photo me-2 me-sm-4">
                            <img src={checkPhotoPath(userInformation?.avatar)} alt="Колесникова Ирина"/>
                            {/*<div className="indicator online"/>*/}
                        </div>
                        <div>
                            <h4>{userInformation?.fullName || 'Не известный'}</h4>
                            {/*<div className="gray-2 fs-09">Сейчас онлайн</div>*/}
                        </div>
                    </div>
                    <textarea
                        className="mt-3"
                        rows="4"
                        placeholder="Введите сообщение"
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                    />
                    {messageInputError && (
                        <span className="message-form__error w-100 text-danger">
                            {messageInputError}
                        </span>
                    )}
                    <div className="d-flex align-items-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-1 w-100 flex-1 fs-12 ms-4"
                            onClick={onSendMessage}
                        >
                            ОТПРАВИТЬ
                        </button>
                    </div>
                </form>
            </CustomModal>

            <div className="modal fade" id="write-review" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <h4 className="text-center color-1 mb-2 mb-sm-4">Оставьте отзыв</h4>
                            <form>
                                <div className="row">
                                    <div
                                        className="col-lg-4 d-flex flex-lg-column align-items-center mb-2 mb-sm-4 mb-lg-0">
                                        <div className="photo me-3 me-lg-0 mb-lg-3">
                                            <img
                                                src={checkPhotoPath(userInformation?.avatar)}
                                                alt={userInformation?.fullName}
                                            />
                                            {/*<div className="indicator online"/>*/}
                                        </div>
                                        <div className="text-lg-center">
                                            <div className="fs-11 fw-5 mb-sm-2">{userInformation?.fullName}</div>
                                            <div className="fs-11 fw-5">{userInformation?.ownerTypeForUser}</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="d-flex align-items-center">
                                            <span className="fs-11 me-4">Ваша оценка:</span>
                                            <Rating
                                                initialRating={data?.rating || 0}
                                                start={0}
                                                stop={5}
                                                fractions={2}
                                                emptySymbol={<img src="/img/icons/star-gray.svg" alt="1"/>}
                                                fullSymbol={<img src="/img/icons/star-blue.svg" alt="5"/>}
                                                onClick={(rate) => setData(prevState => ({...prevState, rating: rate}))}
                                            />
                                        </div>
                                        <textarea
                                            className="mt-3"
                                            rows="6"
                                            value={data?.description || ''}
                                            placeholder="Напишите отзыв"
                                            onChange={(e) => setData(prevState => ({...prevState, description: e.target.value}))}
                                        />
                                        <button
                                            disabled={userInformation?.reviewStatus || reviewStatus}
                                            type="submit"
                                            className="btn btn-1 fs-12 ms-auto mt-3"
                                            onClick={(e) => createReview(e)}
                                        >
                                            ОТПРАВИТЬ
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
)
}
