import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useUpdateSize from '../../hooks/useUpdateSize';
import Card from '../../components/Card';
import PaginationCustom from '../../components/PaginationCustom';
import {getWishlist} from '../../API/wishlist';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import BtnDelFromFav from '../../components/BtnDelFromFav';
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import AuthError from "../../components/AuthError"

export default function Favorites({routeName}) {

    const token = useAccessToken()
    const currentUser = useCurrentUser()
    const userId = currentUser?.id
    const view = useUpdateSize('1399px');
    const [wishlistData, setWishlistData] = useState({isLoaded: false})
    const {page} = useParams()
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const req = async () => {
            const response = (currentUser && token) && await getWishlist(userId, page, 4, axiosPrivate, token)
            if (response) {
                setWishlistData({
                    isLoaded: true,
                    meta: response,
                    wishlist: response?.data
                })
            }
        }
        req()
    }, [currentUser, page])

    return (
        <div className="px-sm-3 px-md-4 px-xxl-5 pb-sm-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Избранное</h4>
            <div className={(view === 'as-a-list') ? "" : "row row-cols-sm-2 gx-2 gx-md-4"}>
                {
                    wishlistData?.isLoaded
                        ? wishlistData?.wishlist?.length
                            ? wishlistData?.wishlist?.map(wishItem => (
                                <div key={wishItem.id}>
                                    <Card
                                        type={view}
                                        pictures={[wishItem.image, wishItem.images]}
                                        isVip={wishItem.isVip}
                                        isHot={wishItem.isHot}
                                        title={wishItem.title}
                                        price={wishItem.price}
                                        transactionType={wishItem.transactionType}
                                        addressName={wishItem.residentComplexForUser}
                                        address={wishItem.address}
                                        metro={wishItem.metro}
                                        text={wishItem.description}
                                        date={wishItem.createdAtForUser}
                                        id={wishItem.id}
                                        uuid={wishItem.uuid}
                                        user={wishItem.user}
                                        communalPrice={wishItem.communalPrice}
                                        pledge={wishItem.pledge}
                                        commissionForUser={wishItem.commissionForUser}
                                        prepaymentTypeForUser={wishItem.prepaymentTypeForUser}
                                        rentalTypeForUser={wishItem.rentalTypeForUser}
                                        wishlistStatus={wishItem.wishlistStatus}
                                        reportStatus={wishItem.reportStatus}
                                        userAvatar={wishItem.user?.avatar}
                                        routeName={routeName}
                                    />
                                    <div className="d-flex justify-content-end mt-2">
                                        <BtnDelFromFav realEstateId={wishItem.id} wishlistStatus={wishItem.wishlistStatus}/>
                                    </div>
                                </div>
                            ))
                            : <h6 className='m-auto p-5 text-center'>Объявлений нет</h6>
                        : <h6 className='m-auto p-5 text-center'>Загрузка...</h6>
                }
            </div>
            { wishlistData?.wishlist?.length ? <PaginationCustom meta={wishlistData.meta} baseUrl="personal-account/favorites"/> : null }
        </div>
    )
}
