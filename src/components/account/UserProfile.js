import React, {useState} from "react";
import CustomSelect from "../utilities/CustomSelect";
import ImageUploading from "react-images-uploading";
import {Link} from "react-router-dom";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import InputMask from 'react-input-mask';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Rating from "react-rating";


export default function UserProfile() {

    const axiosPrivate = useAxiosPrivate();

    const currentUser = useCurrentUser()
    const token = useAccessToken()

    const [avatars, setAvatars] = React.useState([
        {data_url: "/Real_estate_front/img/photo.png"},
    ]);

    const maxNumber = 24;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setAvatars(imageList);
    };
    let [redactor, setRedactor] = useState(false);
    const redactorSwitcher = () => {
        if (redactor === false) {
            setRedactor(true)
        } else {
            setRedactor(false)
        }
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

    const uuid = "5a7b042d-f7af-4b14-acbb-4b5d477849c8";
    const {data_url: avatar} = avatars[0]

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

    const data = {firstName, lastName, avatar, sex, birthday, phone, isSubscribed, email, token};


    /*let formData = new FormData();
    formData.append("avatar", avatar)
    console.log(formData.get("avatar"))*/

    const config = {headers: {'content-type': 'multipart/form-data'}}
    const onSubmit = async () => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key])
        }
        // Object.keys(data).map((key) => formData.append(key, data[key]));
        try {
            const response = await axiosPrivate.patch(`https://api.antontig.beget.tech/api/user/update/${uuid}`, formData, config)
        } catch (err) {
            console.log(err)
        }
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
                                        name="image"
                                        multiple={false}
                                        value={avatars}
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
                                                                        src="/Real_estate_front/img/icons/edit.svg"
                                                                        alt="Загрузить"
                                                                    />
                                                                    Загрузить фото
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => onImageRemove(index)}
                                                                >
                                                                    <img
                                                                        src="/Real_estate_front/img/icons/delete2.svg"
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
                                        <Rating
                                            start="0"
                                            stop="5"
                                            readonly={true}
                                            initialRating={currentUser?.rating}
                                            fractions={2}
                                            emptySymbol={<img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>}
                                            fullSymbol={<img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>}
                                        />
                                    </div>
                                    <div className="gray-3 fs-11 text-center mt-1 mt-sm-4">
                                        На сайте с {currentUser?.createdAtForUser}
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
                                                value="0"
                                                onChange={(e) => setSex(e.target.value)}
                                            />
                                            <span className="fs-11 ms-2">Женский</span>
                                        </label>
                                        <label>
                                            <input
                                                name="sex"
                                                type="radio"
                                                className="fs-11"
                                                value="1"
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
                                        mask="9999999999"
                                        alwaysShowMask={true}
                                        maskPlaceholder="__________"
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
                                        value={avatars}
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
                                    <div className="fs-15 fw-7 text-center mt-3 mt-sm-4">{currentUser?.firstName} {currentUser?.lastName}</div>
                                    <div className="rating justify-content-center mt-1 mt-sm-5">
                                        <Rating
                                            start="0"
                                            stop="5"
                                            readonly={true}
                                            initialRating={currentUser?.rating}
                                            fractions={2}
                                            emptySymbol={<img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>}
                                            fullSymbol={<img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>}
                                        />
                                    </div>
                                    <div className="gray-3 fs-11 text-center mt-1 mt-sm-4">На сайте с {currentUser?.createdAtForUser}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Имя:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.firstName} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.lastName} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.sex ? "мужской" : "женский"} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Дата рождения:</div>
                                <div className="col-sm-8 d-flex">
                                    <input value={currentUser?.birthday} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <InputMask disabled mask="+7 (999) 999 99 99" value={currentUser?.phone}/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.email} className="fs-11" disabled/>
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
