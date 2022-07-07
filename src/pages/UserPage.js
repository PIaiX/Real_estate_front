import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ShowPhone from '../components/ShowPhone';
import InputFile from '../components/InputFile';
import {Slider1} from '../components/Slider1';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {
    addReportReview,
    CreateReview,
    deleteReportReview, getReviewsInUsersPage,
    userInfoInUserPage,
} from "../API/userspage";
import {useAccessToken, useCurrentUser} from "../store/reducers";
import Rating from "react-rating";
import BtnRep from "../components/BtnRep";
import Breadcrumbs from "../components/Breadcrumbs";


export default function UserPage() {

    const user = useCurrentUser()
    const token = useAccessToken()
    const axiosPrivate = useAxiosPrivate()
    const {userId} = useParams()
    const {page} = useParams()
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({})
    const [limit, setLimit] = useState(2)
    const [userInformation, setUserInformation] = useState([])
    const imageUpload = 'https://api.antontig.beget.tech/uploads/'
    let rating;
    const [data, setData] = useState({})
    const currentUserId = user?.id
    const [reviewStatus, setReviewStatus] = useState(false)

    useEffect(() => {
        if (userId && user?.id) {
            setData(data => {
                return {...data, "toId": userId, "fromId": user?.id, token, userReport: userInformation?.reportStatus}
            })
        }
    }, [userId, user?.id, token, userInformation])

    const reviewsPage = async () => {
        const result = (currentUserId && userId) ? await getReviewsInUsersPage(axiosPrivate, userId, page, limit, currentUserId) : ""
        if (result) {
            setReviews(result)
        }
    }

    useEffect(() => {
        reviewsPage()
    }, [currentUserId, userId, limit])

    useEffect(() => {
        const userInPage = async () => {
            try {
                const result = (currentUserId && userId) && await userInfoInUserPage(userId, currentUserId)
                if (result) {
                    setUserInformation(result?.body)
                }
            } catch (error) {
                console.log(error)
            }
        }
        userInPage()
    }, [userId, currentUserId])

    const nextReviews = () => {
        if (reviews?.data?.length === limit) {
            setLimit(limit + 2)
        }
    }

    const createReview = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const request = {...review, ...data, rating}
        for (const key in request) {
            formData.append(key, request[key]);
        }
        try {
            const result = await CreateReview(axiosPrivate, formData)
            reviewsPage()
            return result
        } catch (error) {
            console.log(error)
        }
    }

    const addReportForReview = async (usersReviewId) => {
        await addReportReview(axiosPrivate, token, usersReviewId, currentUserId)
        reviewsPage()
    }

    const deleteReportForReview = async (usersReviewId) => {
        await deleteReportReview(axiosPrivate, token, usersReviewId, currentUserId)
        reviewsPage()
    }

    return (
        <main>

            <Breadcrumbs currentRouteName={userInformation?.fullName || 'Имя пользователя'} />

            <section id="sec-10" className="container">
                <div className="row">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mb-5">
                        <div className="row flex-md-row-reverse gx-2 gx-sm-4 gx-xl-5">
                            <div className="col-7 col-sm-8 col-md-9">
                                <div className="d-md-flex align-items-baseline mb-3">
                                    <h1 className="mb-0 me-4">{userInformation?.fullName}</h1>
                                    <div className="fs-11 gray-3">Сейчас онлайн</div>
                                </div>
                                <h4>{userInformation?.ownerTypeForUser}</h4>
                                <div className="fs-11 gray-3">На сайте с {userInformation?.createdAtForUser}</div>
                                <div className="d-flex align-items-center mt-2 mt-sm-4">
                                    <ShowPhone
                                        className="d-none d-md-flex flex-1"
                                        phone={userInformation?.phoneForUser}
                                    />
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#write-message"
                                            className="d-none d-md-flex btn btn-1 px-3 w-100 flex-1 ms-4">Написать
                                        сообщение
                                    </button>
                                    <BtnRep userinfo={data} reportUserStatus={userInformation?.reportStatus}
                                            type="reportUser"/>
                                </div>
                            </div>
                            <div className="col-5 col-sm-4 col-md-3">
                                <div className="user-photo">
                                    <img
                                        src={userInformation?.avatar ? `${imageUpload}${userInformation?.avatar}` : "/img/img-photo.svg"}
                                        alt={userInformation?.fullName}/>
                                    <div className="indicator online"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-xl-10 col-xxl-9 mb-5">
                        <h4 className="text-center text-md-start mb-2 mb-sm-4">Предоставляемые услуги</h4>
                        <div className="fs-11 text-center text-md-start">Пользователь не предоставляет услуг</div>
                        <div className="user-card page">
                            <div className="title justify-content-md-start mb-2 mb-sm-4">
                                <h4 className="mb-0">Дизайнер</h4>
                                <div className="rating ms-4">
                                    <img src="/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/img/icons/star-gray.svg" alt="1"/>
                                    <img src="/img/icons/star-gray.svg" alt="1"/>
                                    <span>(3.35)</span>
                                </div>
                            </div>
                            <div className="desc mb-3 mb-sm-4">
                                <div className="fs-11 fw-5 gray-2 mb-3">Опыт работы от 1 года</div>
                                <div className="fw-3">
                                    <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                </div>
                            </div>
                            <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                <div className="serv">Проектирование</div>
                                <div className="serv">Курирование проекта</div>
                                <div className="serv">Создание макета</div>
                                <div className="serv">Визуализация</div>
                                <div className="serv">Освещение</div>
                            </div>
                        </div>
                    </div>*/}
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
                                {reviews.data?.map(i =>
                                    <div className="review mb-3" key={i.id}>
                                        <img
                                            src={i.from?.avatar ? (`${imageUpload}${i.from?.avatar}`) : "/img/img-photo.svg"}
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
                                {(reviews?.data?.length >= limit) ?
                                    <button
                                        type="button"
                                        className="fs-12 fw-5 color-1 mx-auto bb-1"
                                        onClick={nextReviews}
                                    >
                                        Показать еще
                                    </button>
                                    :
                                    ""
                                }
                            </>
                        }
                    </div>
                    <div className="col-12 mb-5">
                        <h4 className="text-center text-md-start">Объявления пользователя</h4>
                        {(userInformation?.realEstates?.length === 0)
                            ?
                            <div className="fs-11 text-center text-md-start">Нет актуальных объявлений</div>
                            :
                            <div className="position-relative">
                                <Slider1 userAds={userInformation?.realEstates}/>
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
                                data-bs-toggle="modal"
                                data-bs-target="#write-message"
                                className="fs-12 btn btn-1 w-100 px-2"
                            >
                                Написать сообщение
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="write-message" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <form className="message-form">
                                <div className="d-flex align-items-center">
                                    <div className="photo me-2 me-sm-4">
                                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"/>
                                    </div>
                                    <div>
                                        <h4>Колесникова Ирина</h4>
                                        <div className="gray-2 fs-09">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <textarea
                                    className="mt-3"
                                    rows="4"
                                    placeholder="Введите сообщение"
                                />
                                <div className="d-flex align-items-center mt-3">
                                    <InputFile multiple={false}/>
                                    <button
                                        type="submit"
                                        className="btn btn-1 w-100 flex-1 fs-12 ms-4"
                                    >
                                        ОТПРАВИТЬ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

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
                                                src={userInformation?.avatar ? `${imageUpload}${userInformation?.avatar}` : "/img/img-photo.svg"}
                                                alt={userInformation?.fullName}
                                            />
                                            <div className="indicator online"/>
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
                                                stop={5}
                                                fractions={2}
                                                emptySymbol={<img src="/img/icons/star-gray.svg"
                                                                  alt="1"/>}
                                                fullSymbol={<img src="/img/icons/star-blue.svg"
                                                                 alt="1"/>}
                                                onChange={rate => rating = rate}
                                            />
                                        </div>
                                        <textarea
                                            className="mt-3"
                                            rows="6"
                                            value={review?.description}
                                            placeholder="Напишите отзвыв"
                                            onChange={e => setReview(review => {
                                                return {...review, "description": e.target.value}
                                            })}
                                        />
                                        <button
                                            disabled={userInformation?.reviewStatus || reviewStatus}
                                            type="submit"
                                            className="btn btn-1 fs-12 ms-auto mt-3"
                                            onClick={(e) => createReview(e) ? setReviewStatus(true) : ""}
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
