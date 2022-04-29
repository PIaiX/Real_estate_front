import React, {useEffect, useState} from 'react';
import CustomSelect from '../utilities/CustomSelect';
import ImageUploading from "react-images-uploading";
import {Link} from 'react-router-dom';
import {editUser} from "../API/users";
import Rating from 'react-rating';
import InputMask from "react-input-mask";

export default function UserProfile() {

    const [avatar, setAvatar] = React.useState([{'data_url': '/real_estate/img/photo.png'}]);

    const maxNumber = 24;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setAvatar(imageList);
    };

    let [redactor, setRedactor] = useState(false);
    const redactorSwitcher = () => {
        if (redactor === false) {
            setRedactor(true)
        } else {
            setRedactor(false)
        }
    }
    const user = {
        firstName: "IRINA",
        lastName: "Kolesnikova",
        sex: "woman",
        birthday: "12.23.32",
        phone: "123123123",
        email: "qewwe@laslda",
        avatar: "",
        rating: "10",
        isSubscribed: true
    }

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [sex, setSex] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const [m, setM] = useState("")

    const me = (e) => {
        setM(e)
    }

    const [dey, setD] = useState("")
    const de = (e) => {
        setD(e)
    }

    const [y, setY] = useState("")
    const ye = (e) => {
        setY(e)
    }

    const onSubmit = () => {
        const val = {firstName, lastName, sex, birthday, avatar, phone, isSubscribed, email}
    }

    const month = [
        "января", 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря']

    const years = [];
    let start = new Date().getFullYear();
    for (start; start >= 1950; start--) {
        years.push(start - 1)
    }

    let d = [];
    for (let i = 1; i <= 31; i++) {
        d.push(i)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        const fun = async () => {
            try {
                let result = await editUser(data)
                if (result) {
                    setData(result)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fun()
    }, [])

    let birthday = '';
    let indexMonth = month.findIndex((item) => item === m);
    let iM = indexMonth + 1;
    if (iM === 0) {
        birthday = '';
    } else if (dey <= 9 && iM <= 9) {
        birthday = `0${dey}.` + `0${indexMonth + 1}.` + `${y}`
    } else if (dey <= 9 && iM <= 12) {
        birthday = `0${dey}.` + `${indexMonth + 1}.` + `${y}`
    } else if (dey >= 9 && iM <= 9) {
        birthday = `${dey}.` + `0${indexMonth + 1}.` + `${y}`
    } else {
        birthday = `${dey}.` + `${indexMonth + 1}.` + `${y}`
    }

    return (
        redactor ?
            <div className="px-2 px-sm-4 px-xxl-5 pb-3 pb-sm-4 pb-xxl-5">
                <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                    <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
                </nav>
                <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Профиль</h4>
                <form className="form-profile">
                    <div className="row flex-xl-row-reverse">
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="row row-cols-sm-2 row-cols-xl-1">
                                <div>
                                    <ImageUploading
                                        multiple={false}
                                        value={avatar}
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
                                              dragProps
                                          }) => (
                                            <div className="upload__image-wrapper">
                                                <div className="imgs-box">
                                                    {
                                                        imageList.map((image, index) => (
                                                            <div key={index} className="image-item">
                                                                <img src={image.data_url} alt=""/>
                                                                <div className="image-item__btn-wrapper">
                                                                    <button type="button"
                                                                            onClick={() => onImageUpdate(index)}>
                                                                        <img src="/real_estate/img/icons/edit.svg"
                                                                             alt="Загрузить"/>
                                                                        Загрузить фото
                                                                    </button>
                                                                    <button type="button"
                                                                            onClick={() => onImageRemove(index)}>
                                                                        <img src="/real_estate/img/icons/delete2.svg"
                                                                             alt="Удалить"/>
                                                                        Удалить фото
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button type="button" className="btn btn-2 px-3 px-sm-4 mx-auto"
                                                            style={isDragging ? {color: "red"} : null}
                                                            onClick={onImageUpload}
                                                            {...dragProps}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 21 21" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <line x1="10.75" x2="10.75" y2="21" stroke="white"
                                                                  strokeWidth="1.5"/>
                                                            <line y1="10.25" x2="21" y2="10.25" stroke="white"
                                                                  strokeWidth="1.5"/>
                                                        </svg>
                                                        <span className="ms-2">Загрузить фото</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                                <div>
                                    <div className="fs-15 fw-7 text-center mt-3 mt-sm-4">Колесникова Ирина</div>
                                    <div className="rating justify-content-center mt-1 mt-sm-5">
                                        <Rating
                                            fractions={2}
                                            readonly
                                            emptySymbol={<img src="/real_estate/img/icons/star-gray.svg" alt="1"/>}
                                            fullSymbol={<img src="/real_estate/img/icons/star-blue.svg" alt="1"/>}
                                        />
                                    </div>
                                    <div className="gray-3 fs-11 text-center mt-1 mt-sm-4">На сайте с сентября 2019
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Имя:</div>
                                <div className="col-sm-8">
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="Имя"
                                        className="fs-11"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-8">
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Фамилия"
                                        className="fs-11"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                <div className="col-sm-8">
                                    <div className="row row-cols-2">
                                        <label>
                                            <input
                                                name="sex"
                                                type="radio"
                                                className="fs-11"
                                                value="woman"
                                                onChange={(e) => setSex(e.target.value)}
                                            />
                                            <span className="fs-11 ms-2">Женский</span>
                                        </label>
                                        <label>
                                            <input
                                                name="sex"
                                                type="radio"
                                                className="fs-11"
                                                value="man"
                                                onChange={(e) => setSex(e.target.value)}
                                            />
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
                                        checkedOpt={dey}
                                        options={d}
                                        de={de}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt={m}
                                        options={month}
                                        me={me}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt={y}
                                        options={years}
                                        ye={ye}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <InputMask
                                        mask="+7 (999) 999 99 99"
                                        alwaysShowMask={true}
                                        maskPlaceholder="+7 (___) ___ __ __"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    {/*<input
                                        name="phone"
                                        type="text"
                                        placeholder="Номер телефона"
                                        className="fs-11"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />*/}
                                    <div className="fs-09 gray-3 mt-1">Телефон будет виден в объявлениях другим
                                        пользователям
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-8">
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="Email@mail.com"
                                        className="fs-11"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-sm-8">
                                    <label>
                                        <input
                                            name="isSubscribed"
                                            type="checkbox"
                                            className="fs-11"
                                            value={isSubscribed}
                                            onChange={(e) =>
                                                setIsSubscribed(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
                                            }
                                        />
                                        <span className="fs-11 ms-2">Получать уведомления на почту</span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit"
                                    className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                    onClick={() => {
                                        redactorSwitcher();
                                    }}
                            >Назад
                            </button>
                            <button type="submit"
                                    className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                    onClick={() => {
                                        redactorSwitcher();
                                        onSubmit();
                                    }}
                            >Сохранить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            :
            <div className="px-2 px-sm-4 px-xxl-5 pb-3 pb-sm-4 pb-xxl-5">
                <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                    <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
                </nav>
                <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Профиль</h4>
                <form className="form-profile">
                    <div className="row flex-xl-row-reverse">
                        <div className="col-xl-4 mb-4 mb-xl-0">
                            <div className="row row-cols-sm-2 row-cols-xl-1">
                                <div>
                                    <ImageUploading
                                        multiple={false}
                                        value={avatar}
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
                                              dragProps
                                          }) => (
                                            <div className="upload__image-wrapper">
                                                <div className="imgs-box">
                                                    {
                                                        imageList.map((image, index) => (
                                                            <div key={index} className="image-item">
                                                                <img src={image.data_url} alt=""/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                                <div>
                                    <div className="fs-15 fw-7 text-center mt-3 mt-sm-4">Колесникова Ирина</div>
                                    <div className="rating justify-content-center mt-1 mt-sm-5">
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="2"/>
                                        <img src="/real_estate/img/icons/star-blue.svg" alt="3"/>
                                        <img src="/real_estate/img/icons/star-gray.svg" alt="4"/>
                                        <img src="/real_estate/img/icons/star-gray.svg" alt="5"/>
                                    </div>
                                    <div className="gray-3 fs-11 text-center mt-1 mt-sm-4">На сайте с сентября 2019
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Имя:</div>
                                <div className="col-sm-8">
                                    <input value={user.firstName} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-8">
                                    <input value={user.lastName} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                <div className="col-sm-8">
                                    <input value={user.sex} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Дата рождения:</div>
                                <div className="col-sm-8 d-flex">
                                    <input value={user.birthday} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <input value={user.phone} className="fs-11" disabled/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-8">
                                    <input value={user.email} className="fs-11" disabled/>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                onClick={() => {
                                    if (redactor === false) {
                                        setRedactor(true)
                                    } else {
                                        setRedactor(false)
                                    }
                                }}
                            >Редактировать
                            </button>
                        </div>
                    </div>
                </form>
            </div>
    )
}
