import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import useUpdateSize from '../../hooks/useUpdateSize';
import Card from '../../components/Card';
import {getWishlist} from '../../API/wishlist';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import Loader from "../../components/Loader";
import {deleteWishList} from "../../API/adspage";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../../store/actions/alert"
import Pagination from "../../components/Pagination";
import usePagination from "../../hooks/pagination";

export default function Favorites({routeName}) {

    const token = useAccessToken()
    const currentUser = useCurrentUser()
    const userId = currentUser?.id
    const view = useUpdateSize('1399px');
    const wishlistPag = usePagination(1)
    const [wishlistData, setWishlistData] = useState({isLoaded: false})
    const axiosPrivate = useAxiosPrivate();
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        getWishlist(userId, wishlistPag.currentPage, wishlistPag.pageLimit, axiosPrivate, token)
            .then(res => {
                setWishlistData({
                    isLoaded: true,
                    meta: res,
                    wishlist: res?.data
                })
            })
        window.scrollTo(0, 0)
    }, [currentUser, wishlistPag.currentPage])

    useEffect(() => {
        if (wishlistData?.wishlist?.length === 0) {
            wishlistPag.setStartingPage(1)
            wishlistPag.setCurrentPage(1)
        }
    }, [wishlistData?.wishlist?.length])

    const deleteFromWishList = async (realEstateId) => {
        deleteWishList({userId, token, realEstateId}, axiosPrivate)
            .then(() => {
                getWishlist(userId, wishlistPag.currentPage, wishlistPag.pageLimit, axiosPrivate, token)
                    .then(res => {
                        setWishlistData({
                            isLoaded: true,
                            meta: res,
                            wishlist: res?.data
                        })
                    })
                setAlert('success', true, 'Объявление успешно удалено из избранных')
            })
            .catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
    }

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
                                        userId={wishItem.user.id}
                                        inWishlist={true}
                                    />
                                    <div className="d-flex justify-content-end mt-2">
                                        <button
                                            type="button"
                                            className="ms-4 color-1 d-flex align-items-center"
                                            onClick={() => deleteFromWishList(wishItem.id)}
                                        >
                                            <img src="/img/icons/pa-10.svg" alt="Удалить"/>
                                            <span className="ms-2">Удалить из избранного</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                            : <h6 className='m-auto p-5 text-center'>Объявлений нет</h6>
                        :  <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
                }
            </div>
            <Pagination
                pageLimit={wishlistPag.pageLimit}
                currentPage={wishlistPag.currentPage}
                setCurrentPage={wishlistPag.setCurrentPage}
                pagesDisplayedLimit={3}
                itemsAmount={wishlistData?.meta?.meta?.total || 0}
                startingPage={wishlistPag.startingPage}
                className='mt-4 mt-sm-5'
                setStartingPage={wishlistPag.setStartingPage}
            />
        </div>
    )
}
