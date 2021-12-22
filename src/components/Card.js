import React from 'react';
import BtnFav from '../utilities/BtnFav';
import HoverSlider from '../utilities/HoverSlider';
import ImgPreview from '../utilities/ImgPreview';
import ShowPhone from '../utilities/ShowPhone';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    const type = props.type;
    const images = props.images;

    if(type === 'as-a-list') {
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
                                    <NavLink to="/card-page">{props.title}</NavLink>
                                </div>
                                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                                    <img src="/real_estate/img/icons/pin.svg" alt="адрес"/>
                                    <div className="fs-09 ms-2">
                                        <div>{props.addressName}</div>
                                        <div>{props.address}</div>
                                    </div>
                                </div>
                                {
                                    (props.metro)&&
                                    <div className="d-flex align-items-center mb-2 mb-xxl-3">
                                        <img src="/real_estate/img/icons/metro.svg" alt="адрес"/>
                                        <div className="fs-09 ms-2">
                                            <div>{props.metro}</div>
                                        </div>
                                    </div>
                                }
                                <div className="text mb-3 mb-xxl-4">
                                    {props.text}
                                </div>
                            </div>
                            <div className="bottom-btns">
                                <button type="button" className="btn-pin">
                                    <svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 18C7.5 18 15 11.6033 15 6.75C15 4.95979 14.2098 3.2429 12.8033 1.97703C11.3968 0.711159 9.48912 0 7.5 0C5.51088 0 3.60322 0.711159 2.1967 1.97703C0.790176 3.2429 2.96403e-08 4.95979 0 6.75C0 11.6033 7.5 18 7.5 18ZM7.5 10.125C6.50544 10.125 5.55161 9.76942 4.84835 9.13649C4.14509 8.50355 3.75 7.64511 3.75 6.75C3.75 5.85489 4.14509 4.99645 4.84835 4.36351C5.55161 3.73058 6.50544 3.375 7.5 3.375C8.49456 3.375 9.44839 3.73058 10.1517 4.36351C10.8549 4.99645 11.25 5.85489 11.25 6.75C11.25 7.64511 10.8549 8.50355 10.1517 9.13649C9.44839 9.76942 8.49456 10.125 7.5 10.125Z"/>
                                    </svg>
                                </button>
                                <BtnFav />
                                <button type="button" className="btn-notice">
                                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                                        <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                                    </svg>
                                </button>
                                <div className="color-2 fs-09 fw-3">{props.date}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="text-end title-font black fw-7 fs-15">{props.price} ₽</div>
                        <div className="fs-08 gray-3 text-end mt-2">
                            {
                                (props.communalPayments)?
                                props.communalPayments
                                : "Коммунальные платежи не указаны"
                            }
                            <br />Залог 
                            {
                                (props.deposit)?
                                ' '+props.deposit+' ₽'
                                : ' не указан'
                            }
                            , комиссия 
                            {
                                (props.commission)?
                                ' '+props.commission
                                : ' не указана'
                            }
                            <br />{
                                (props.prepayment)?
                                props.prepayment
                                : 'предоплата не указана'
                            }, {
                                (props.tenancy)?
                                props.tenancy
                                : 'срок аренды не указан'
                            }
                        </div>
                        <div className="author w-fit d-flex flex-column align-items-center ms-auto mt-4">
                            {
                                (props.authorPhoto)?
                                <img src={props.authorPhoto} alt="Фото"/>
                                : <img src="/real_estate/img/img-photo.svg" alt="Фото"/>
                            }
                            <div className="gray-2 fw-5 fs-09 mt-2">{props.authorName}</div>
                            {
                                (props.authorTimeSpan)&&
                                <div className="gray-3 fs-08 mt-2">На сайте с {props.authorTimeSpan}</div>
                            }
                            <ShowPhone className="fs-09 mt-3" phone={props.phone}/>
                        </div>
                    </div>
                </div>
                <div className="labels">
                    <div className="vip">
                        <img src="/real_estate/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>
                    <div className="hot">
                        <img src="/real_estate/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={"card-mini " + props.className}>
                <HoverSlider urls={images}/>
                <div className="p-3">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="title color-1 title-font fw-7 fs-11">
                            <NavLink to="/card-page">{props.title}</NavLink>
                        </div>
                        <div className="title-font black fw-7 fs-11">{props.price} ₽</div>
                    </div>
                    <div className="address d-flex align-items-start mb-3">
                        <img src="/real_estate/img/icons/pin.svg" alt="адрес"/>
                        <div className="fs-09 ms-2">
                            <div className="mb-1">{props.addressName}</div>
                            <div>{props.address}</div>
                        </div>
                    </div>
                    <div className="text mb-4">
                        {props.text}
                    </div>
                    <div className="text-end color-2 fs-09 fw-3">
                        {props.date}
                    </div>
                </div>
                <div className="labels">
                    <div className="vip">
                        <img src="/real_estate/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>
                    <div className="hot">
                        <img src="/real_estate/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>
                </div>
                <BtnFav />
            </div>
        )
    }
}
