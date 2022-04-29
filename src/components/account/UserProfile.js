import React from "react";
import CustomSelect from "../utilities/CustomSelect";
import ImageUploading from "react-images-uploading";
import {Link} from "react-router-dom";
import {useCurrentUser} from "../../store/reducers";
import axios from "axios";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "../../store/actions/accessToken";
import currentUserActions from "../../store/actions/currentUser";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useEffect} from "react";


export default function UserProfile() {
    const [images, setImages] = React.useState([
        {data_url: "/real_estate/img/photo.png"},
    ]);

    const maxNumber = 24;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const currentUser = useCurrentUser()

        return (
            <div className="px-2 px-sm-4 px-xxl-5 pb-3 pb-sm-4 pb-xxl-5">
                <nav
                    className="d-block d-lg-none mt-3 mb-3 mb-sm-5"
                    aria-label="breadcrumb"
                >
                    <Link to="/personal-account" className="gray-3">
                        &#10094; Назад
                    </Link>
                </nav>
                <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Профиль</h4>
                <form className="form-profile">
                    <div className="row flex-xl-row-reverse">
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="row row-cols-sm-2 row-cols-xl-1">
                                <div>
                                    <ImageUploading
                                        multiple={false}
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                              imageList,
                                              onImageUpload,
                                              onImageUpdate,
                                              onImageRemove,
                                              isDragging,
                                              dragProps,
                                          }) => (
                                            <div className="upload__image-wrapper">
                                                <div className="imgs-box">
                                                    {imageList.map((image, index) => (
                                                        <div key={index} className="image-item">
                                                            <img src={image.data_url} alt=""/>
                                                            <div className="image-item__btn-wrapper">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => onImageUpdate(index)}
                                                                >
                                                                    <img
                                                                        src="/real_estate/img/icons/edit.svg"
                                                                        alt="Загрузить"
                                                                    />
                                                                    Загрузить фото
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => onImageRemove(index)}
                                                                >
                                                                    <img
                                                                        src="/real_estate/img/icons/delete2.svg"
                                                                        alt="Удалить"
                                                                    />
                                                                    Удалить фото
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-2 px-3 px-sm-4 mx-auto"
                                                        style={isDragging ? {color: "red"} : null}
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 21 21"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <line
                                                                x1="10.75"
                                                                x2="10.75"
                                                                y2="21"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                            />
                                                            <line
                                                                y1="10.25"
                                                                x2="21"
                                                                y2="10.25"
                                                                stroke="white"
                                                                strokeWidth="1.5"
                                                            />
                                                        </svg>
                                                        <span className="ms-2">Загрузить фото</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                                <div>
                                    <div className="fs-15 fw-7 text-center mt-3 mt-sm-4">
                                        {currentUser?.firstName} {currentUser?.lastName}
                                    </div>
                                    <div className="rating justify-content-center mt-1 mt-sm-5">
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="2"/>
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="3"/>
                                        <img src="/real_estate/img/icons/star-gray.svg" alt="4"/>
                                        <img src="/real_estate/img/icons/star-gray.svg" alt="5"/>
                                    </div>
                                    <div className="gray-3 fs-11 text-center mt-1 mt-sm-4">
                                        На сайте с сентября 2019
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Имя:</div>
                                <div className="col-sm-8">
                                    <input placeholder="Ирина" className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-8">
                                    <input placeholder="Колесникова" className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                <div className="col-sm-8">
                                    <div className="row row-cols-2">
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Женский"
                                                defaultChecked={true}
                                            />
                                            <span className="fs-11 ms-2">Женский</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="Мужской"/>
                                            <span className="fs-11 ms-2">Мужской</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Дата рождения:</div>
                                <div className="col-sm-8 d-flex">
                                    <CustomSelect
                                        className="flex-1"
                                        btnClass="inp"
                                        checkedOpt="1"
                                        options={["1", "2", "3", "4"]}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt="января"
                                        options={[
                                            "января",
                                            "февраля",
                                            "марта",
                                            "апреля",
                                            "мая",
                                            "июня",
                                            "июля",
                                            "августа",
                                            "сентября",
                                            "октября",
                                            "ноября",
                                            "декабря",
                                        ]}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt="2001"
                                        options={["2001", "2002", "2003", "2004"]}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <input placeholder="+7 (962) 123 56 89" className="fs-11"/>
                                    <div className="fs-09 gray-3 mt-1">
                                        Телефон будет виден в объявлениях другим пользователям
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-8">
                                    <input placeholder="Email@mail.com" className="fs-11"/>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-sm-8">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="notifications"
                                            value="Получать уведомления на почту"
                                        />
                                        <span className="fs-11 ms-2">
                    Получать уведомления на почту
                  </span>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                            >
                                Редактировать
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
