import React from 'react';
import BtnFav from './utilities/BtnFav';
import BtnRep from './utilities/BtnRep';
import HoverSlider from './utilities/HoverSlider';
import ImgPreview from './utilities/ImgPreview';
import ShowPhone from './utilities/ShowPhone';
import {NavLink} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';

export default function Card(props) {

    const type = props.type;
    const images = props.images;
    const avatar = props?.avatar;

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    if (type === 'as-a-list') {
        return (
            <div className={"card-midi " + props.className}>
                <div className="row">
                    <div className="col-4">
                        <HoverSlider urls={images}/>
                        <ImgPreview urls={images}/>
                    </div>
                    <div className="col-5">
                        <div className="h-100 d-flex flex-column justify-content-between align-items-start">
                            <div>
                                <div className="color-1 title-font fw-7 fs-15 mb-3 mb-xxl-4">
                                  <NavLink 
                                    to={`/card-page/${props?.uuid}`}
                                    onClick={() => scrollToTop()}
                                  >{props.title} м<sup>2</sup></NavLink>
                                </div>
                                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                                    <img src="/Real_estate_front/img/icons/pin.svg" alt="адрес"/>
                                    <div className="fs-09 ms-2">
                                        <div>{props.address}</div>
                                        <div>{props?.residentalComplex}</div>
                                    </div>
                                </div>
                                {
                                    (props.metro) &&
                                    <div className="d-flex align-items-center mb-2 mb-xxl-3">
                                        <img src="/Real_estate_front/img/icons/metro.svg" alt="адрес"/>
                                        <div className="fs-09 ms-2">
                                            <div>{props.metro}</div>
                                        </div>
                                    </div>
                                }
                                <div className="text mb-3 mb-xxl-4 text-break">
                                    {props.text}
                                </div>
                            </div>
                            <div className="bottom-btns">
                                <button type="button" className="btn-pin">
                                    <svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 18C7.5 18 15 11.6033 15 6.75C15 4.95979 14.2098 3.2429 12.8033 1.97703C11.3968 0.711159 9.48912 0 7.5 0C5.51088 0 3.60322 0.711159 2.1967 1.97703C0.790176 3.2429 2.96403e-08 4.95979 0 6.75C0 11.6033 7.5 18 7.5 18ZM7.5 10.125C6.50544 10.125 5.55161 9.76942 4.84835 9.13649C4.14509 8.50355 3.75 7.64511 3.75 6.75C3.75 5.85489 4.14509 4.99645 4.84835 4.36351C5.55161 3.73058 6.50544 3.375 7.5 3.375C8.49456 3.375 9.44839 3.73058 10.1517 4.36351C10.8549 4.99645 11.25 5.85489 11.25 6.75C11.25 7.64511 10.8549 8.50355 10.1517 9.13649C9.44839 9.76942 8.49456 10.125 7.5 10.125Z"/>
                                    </svg>
                                </button>
                                <BtnFav realEstateId={props?.id} wishlist={props?.wishlist}/>
                                <BtnRep realEstateId={props?.id} reportStatus={props?.reportStatus} type="reportAd"/>
                                <div className="color-2 fs-09 fw-3">{props.date}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {(props?.transactionType === 1) ?
                            <div className="text-end title-font black fw-7 fs-15">{props.price} ₽</div>
                            :
                            <>
                                <div className="text-end title-font black fw-7 fs-15">{props.price} ₽/мес</div>
                                <div className="fs-08 gray-3 text-end mt-2">
                                    {
                                        (props.communalPrice) ?
                                            `Коммунальные платежи: ${props.communalPrice} ₽`
                                            : "Коммунальные платежи не указаны"
                                    }
                                    <br/>
                                    {
                                        (props.pledge) ?
                                            `Залог: ${props?.pledge} ₽`
                                            : 'не указан'
                                    }
                                    ,
                                    {
                                        (props.commissionForUser) ?
                                            ` комиссия: ${props.commissionForUser}`
                                            : `не указана`
                                    }
                                    <br/>
                                    {
                                        (props.prepaymentTypeForUser) ?
                                            `Предоплата: ${props.prepaymentTypeForUser}`
                                            : 'предоплата не указана'
                                    }
                                    ,
                                    {
                                        (props.rentalTypeForUser) ?
                                            ` аренда: ${props.rentalTypeForUser}`
                                            : 'срок аренды не указан'
                                    }
                                </div>
                            </>
                        }
                        <div className="author w-fit d-flex flex-column align-items-center ms-auto mt-4">
                            {
                                (avatar) ?
                                    <img src={avatar} alt="Фото"/>
                                    : <img src="/Real_estate_front/img/img-photo.svg" alt="Фото"/>
                            }
                            <div className="gray-2 fw-5 fs-09 mt-2">{props.user?.fullName}</div>
                            {
                                (props.user?.createdAtForUser) &&
                                <div className="gray-3 fs-08 mt-2">На сайте с {props.user?.createdAtForUser}</div>
                            }
                            <ShowPhone className="fs-09 mt-3" phone={props.user?.phone}/>
                        </div>
                    </div>
                </div>
                <div className="labels">
                    {props.isVip && <div className="vip">
                        <img src="/Real_estate_front/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>}
                    {props.isHot && <div className="hot">
                        <img src="/Real_estate_front/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"card-mini " + props.className}>
                <HoverSlider urls={images}/>
                <div className="p-3">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="title color-1 title-font fw-7 fs-11">
                            <NavLink
                              to={`/card-page/${props?.uuid}`}
                              onClick={() => scrollToTop()}
                            >{props.title} м<sup>2</sup></NavLink>
                        </div>
                        <div className="title-font black fw-7 fs-11">{props.price} ₽</div>
                    </div>
                    <div className="address d-flex align-items-start mb-3">
                        <img src="/Real_estate_front/img/icons/pin.svg" alt="адрес"/>
                        <div className="fs-09 ms-2">
                            <div className="mb-1">ЖК "{props.residentalComplex}"</div>
                            <div>{props.address}</div>
                        </div>
                    </div>
                    <div className="text mb-4 text-break" >
                        {props.text}
                    </div>
                    <div className="text-end color-2 fs-09 fw-3">
                        {props.date}
                    </div>
                </div>
                <div className="labels">
                    {props.isVip && <div className="vip">
                        <img src="/Real_estate_front/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>}
                    {props.isHot && <div className="hot">
                        <img src="/Real_estate_front/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>}
                </div>
                <BtnFav realEstateId={props?.id} wishlist={props?.wishlist}/>
            </div>
        )
    }
}
