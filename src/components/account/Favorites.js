import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import useUpdateSize from '../hooks/useUpdateSize';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Card from '../Card';
import PaginationCustom from '../utilities/PaginationCustom';


export default function Favorites() {
    const view = useUpdateSize('1399px');
    const axiosPrivate = useAxiosPrivate();
    const [meta, setMeta] = useState([])
    const [wishlist, setWishlist] = useState([])
    const userid = useSelector(state => state?.currentUser?.id)
    const {page} = useParams()

    console.log('wishlist', wishlist)

    useEffect(() => {
        const checkAuth = async (userid, page = 1, limit = 4) => {
            try {
                const response = userid ? await axiosPrivate.post(`https://api.antontig.beget.tech/api/user/wishlist/${userid}`, {page, limit}) : ''
                if (response) {
                    setWishlist(response?.data.body.data)
                    setMeta(response?.data.body)
                }
            } catch (error) {
                console.log(error)
            }

        }
        checkAuth(userid, page, 4);
    }, [userid, page]);

    return (
        <div className="px-sm-3 px-md-4 px-xxl-5 pb-sm-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Избранное</h4>
            <div className={(view === 'as-a-list') ? "" : "row row-cols-sm-2 gx-2 gx-md-4"}>
                {wishlist.map(wishItem =>
                    <div className="mb-4 mb-md-5" key={wishItem.id}>
                        <Card
                            type={view}
                            images={[
                                '/Real_estate_front/img/img1.jpg',
                                '/Real_estate_front/img/img2.jpg',
                                '/Real_estate_front/img/img3.jpg',
                                '/Real_estate_front/img/img4.jpg'
                            ]}
                            isVip={wishItem.isVip}
                            isHot={wishItem.isHot}
                            title={wishItem.title}
                            price={wishItem.price}
                            addressName={wishItem.residentComplexForUser}
                            address={wishItem.address}
                            metro={wishItem.metro}
                            text={wishItem.description}
                            date={wishItem.createdAtForUser}
                        />
                        <div className="d-flex justify-content-end mt-2">
                            <button type="button" className="ms-4 color-1 d-flex align-items-center">
                                <img src="/Real_estate_front/img/icons/pa-10.svg" alt="Удалить"/>
                                <span className="ms-2">Удалить из избранного</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <nav>
                <PaginationCustom meta={meta} baseUrl="personal-account/favorites"/>
            </nav>
        </div>
    )
}
