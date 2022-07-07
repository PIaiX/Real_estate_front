import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getReviews} from "../../API/users";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import Rating from "react-rating";
import PaginationCustom from "../../components/PaginationCustom";
import AuthError from "../../components/AuthError"

export default function UserReviews() {

    const axiosPrivate = useAxiosPrivate()
    const user = useCurrentUser()
    const token = useAccessToken()
    const userId = user?.id
    const {page} = useParams()
    const [reviews, setReviews] = useState([])
    const [pages, setPages] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.antontig.beget.tech/uploads/'

    useEffect(() => {
        const reviews = async () => {
            try {
                const result = (userId) ? await getReviews(axiosPrivate, userId, page, 4) : ''
                if (result) {
                    setReviews(result.data)
                    setPages(result)
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        reviews()
    }, [userId, page])

    const avatarReviewer = (avatar) => `${url}${avatar}`

    return (
        <div className="px-2 px-sm-4 px-xxl-5 pb-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            {(user && token) ?
                <>
                    <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Отзывы</h4>
                    {isLoading ?
                        <div className="text-center">
                            <p>Загрузка отзывов</p>
                        </div>
                        :
                        <>
                            {reviews?.length === 0 ?
                                <div className="text-center">
                                    <p>Нет отзывов</p>
                                </div>
                                :
                                <>
                                    {reviews.map((i) =>
                                        <div className="review mb-3" key={i?.id}>
                                            <img
                                                src={i?.from?.avatar ? avatarReviewer(i?.from?.avatar) : "/img/img-photo.svg"}
                                                alt={i?.from?.fullName}
                                                className="photo d-none d-sm-block"
                                            />
                                            <div className="ms-sm-4">
                                                <div
                                                    className="d-flex align-items-end align-items-sm-center d-sm-block mb-2 mb-sm-0">
                                                    <div className="ms-3 ms-sm-0">
                                                        <h4>{i?.from?.fullName}</h4>
                                                        <h4 className="mb-0">{i?.from?.ownerTypeForUser}</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>{i?.description}</p>
                                                </div>
                                                <div className="top">
                                                    <div className="fs-11 gray-3">{i?.createdAtForUser}</div>
                                                    <div className="rating mt-1 mt-sm-2">
                                                        <Rating
                                                            start="0"
                                                            stop="5"
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
                                        </div>
                                    )}
                                </>
                            }
                        </>
                    }
                </>
                :
                <AuthError/>
            }
            <PaginationCustom meta={pages} baseUrl="personal-account/my-reviews"/>
        </div>
    )
}
