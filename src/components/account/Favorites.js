import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import useUpdateSize from '../hooks/useUpdateSize';
import Card from '../Card';
import PaginationCustom from '../utilities/PaginationCustom';
import {getWishlist} from '../API/wishlist';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import BtnDelFromFav from '../utilities/BtnDelFromFav';

export default function Favorites() {
    const view = useUpdateSize('1399px');
    const [wishlistData, setWishlistData] = useState({})
    const userid = useSelector(state => state?.currentUser?.id)
    const {page} = +useParams()
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const req = async (userId, page, limit, axiosPrivate) => {
            const response = await getWishlist(userId, page, limit, axiosPrivate)
            if (response) {
                console.log(response)
                setWishlistData({
                    meta: response,
                    wishlist: response?.data
                })
            }
        }
        req(userid, page, 4, axiosPrivate)
    }, [userid, page])

    return (
        <div className="px-sm-3 px-md-4 px-xxl-5 pb-sm-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Избранное</h4>
            <div className={(view === 'as-a-list') ? "" : "row row-cols-sm-2 gx-2 gx-md-4"}>
                {
                    wishlistData.wishlist
                        ? wishlistData.wishlist.map(wishItem => (
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
                                />
                                <div className="d-flex justify-content-end mt-2">
                                    <BtnDelFromFav realEstateId={wishItem.id} wishlistStatus={wishItem.wishlistStatus}/>
                                </div>
                            </div>
                        ))
                        : <div className='text-center m-auto p-5'>Объявлений нет</div>
                }
            </div>
            <nav>
                {
                    wishlistData.wishlist
                        ? <PaginationCustom meta={wishlistData.meta} baseUrl="personal-account/favorites"/>
                        : null
                }
            </nav>
        </div>
    )
}
