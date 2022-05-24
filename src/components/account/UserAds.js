import React, {useState, useEffect} from 'react';
import Card from '../Card';
import {Link, useParams} from 'react-router-dom';
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import PaginationCustom from "../utilities/PaginationCustom";

export default function UserAds() {

    const [view, setView] = useState('as-a-list');

    useEffect(() => {
        function updateSize() {
            if(window.matchMedia("(max-width: 1399px)").matches){
                setView('tiled');
            } else {
                setView('as-a-list');
            }
        }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
    }, []);

    const axiosPrivate = useAxiosPrivate();
    const currentUser = useCurrentUser()
    const userId = currentUser?.id
    const [myAds, setMyAds] = useState([])
    const [pages, setPages] = useState([])
    const {page} = useParams()
    const sait = "https://api.antontig.beget.tech/"

    useEffect(() => {
        const getMyAds = async (userId, page = 1, limit = 4) => {
            try {
                const response = userId ? await axiosPrivate.post(`${sait}api/user/realEstates/${userId}`, {page, limit}) : ''
                if (response) {
                    setMyAds(response.data.body.data)
                    setPages(response.data.body)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getMyAds(userId, page, 4);
    }, [userId,page]);

    const getImages = (i) => {

        const url = 'https://api.antontig.beget.tech/uploads/'
        const result = [].concat(i?.image)

        return result.map(item => item
            ? `${url}${item}`
            : '/Real_estate_front/img/nophoto.jpg'
        )

    }

    console.log(myAds)

    return (
        <div className="px-sm-3 px-md-4 px-xxl-5 pb-3 pb-sm-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои объявления</h4>
            <div className={(view === 'as-a-list') ? "" : "row row-cols-sm-2 gx-2 gx-md-4"}>
                {myAds.map((i) =>
                    <div className="mb-4 mb-md-5" key={i.id}>
                        <Card
                            type={view}
                            images={getImages(i)}
                            isVip={i.isVip}
                            isHot={i.isHot}
                            title={i.title}
                            price={i.price}
                            transactionType={i.transactionType}
                            addressName={i.residentComplexForUser}
                            address={i.address}
                            metro={i.metro}
                            text={i.description}
                            date={i.createdAtForUser}
                            uuid={i.uuid}
                            user={i.user}
                            communalPrice={i.communalPrice}
                            pledge={i.pledge}
                            commissionForUser={i.commissionForUser}
                            prepaymentTypeForUser={i.prepaymentTypeForUser}
                            rentalTypeForUser={i.rentalTypeForUser}
                            realEstateId={i?.id}
                            wishlist={i?.wishlistStatus}
                        />
                        <div className={(view === 'as-a-list') ? "d-flex justify-content-end align-items-center mt-2" : "mt-2"}>
                            <button type="button" className="color-1 d-flex align-items-center">
                                <img src="/Real_estate_front/img/icons/pa-8.svg" alt="Срочная продажа"/>
                                <span className="ms-2">Срочная продажа</span>
                            </button>
                            <Link to="/advertise" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                                <img src="/Real_estate_front/img/icons/pa-9.svg" alt="Редактировать"/>
                                <span className="ms-2">Редактировать</span>
                            </Link>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#delete-ad" className={(view === 'as-a-list') ? "ms-4 color-1 d-flex align-items-center" : "mt-2 color-1 d-flex align-items-center"}>
                                <img src="/Real_estate_front/img/icons/pa-10.svg" alt="Удалить"/>
                                <span className="ms-2">Удалить</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
                <PaginationCustom meta={pages} baseUrl="personal-account/my-ads"/>
            <div className="modal fade" id="delete-ad" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <div className="text-center fs-15 fw-6 title-font my-5">Вы уверены что хотите удалить объявление?</div>
                            <div className="row row-cols-2">
                                <div>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-2 w-100 fs-11 text-uppercase">Отмена</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100 fs-11 text-uppercase">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
