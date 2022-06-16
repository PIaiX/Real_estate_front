import React, {useEffect, useState} from "react";
import CustomSelect from "../utilities/CustomSelect";
import ImageUploading from "react-images-uploading";
import {Link} from "react-router-dom";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import InputMask from 'react-input-mask';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Rating from "react-rating";
import {DeleteUserPhoto, updateUser, userInfo} from "../API/users";
import AuthError from "../utilities/AuthError"

export default function UserProfile() {

    const axiosPrivate = useAxiosPrivate();
    const token = useAccessToken()
    const currentUser = useCurrentUser()
    const sait = 'https://api.antontig.beget.tech/uploads/';
    const [avatars, setAvatars] = useState([{data_url: "./Real_estates_front/public/img/img-photo.svg"}]);
    const uuid = currentUser?.uuid;
    const userId = currentUser?.id

    useEffect(() => {
        if (currentUser) {
            setFirstName(currentUser?.firstName)
            setLastName(currentUser?.lastName)
            setPhone(currentUser?.phone)
            setEmail(currentUser?.email)
            setSex(currentUser?.sex)
        }
    }, [currentUser])

    useEffect(() => {
        if (currentUser?.avatar) {
            setAvatars([{data_url: `${sait}${currentUser?.avatar}`}])
        }
    }, [currentUser])

    const maxNumber = 24;
    const onChange = (imageList, addUpdateIndex) => {
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

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [sex, setSex] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const months = [
        "января", 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ]

    const years = [];

    let start = new Date().getFullYear();
    for (start; start >= 1940; start--) {
        years.push(start)
    }

    let days = [];

    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }

    const convert = (day, month, year) => {
        let birthday = '';
        if (day || month || year) {
            if (month === 0) {
                birthday = '';
            } else if (day <= 9 && month <= 9) {
                birthday = `0${day}.` + `0${month}.` + `${year}`
            } else if (day <= 9 && month <= 12) {
                birthday = `0${day}.` + `${month}.` + `${year}`
            } else if (day >= 9 && month <= 9) {
                birthday = `${day}.` + `0${month}.` + `${year}`
            } else {
                birthday = `${day}.` + `${month}.` + `${year}`
            }
        }
        return birthday
    }

    useEffect(() => {
        if (day || month || year) {
            convert(day, month, year)
        }
    }, [day, month, year])

    const data = {
        firstName,
        lastName,
        sex,
        birthday: (day == null || year == null) ? currentUser?.birthdayForUser : convert(day, month, year),
        phone,
        isSubscribed,
        email,
        token,
    }

    const [avatar, setAvatar] = useState([])

    useEffect(() => {
        setAvatar(avatars[0]?.file)
        if (avatar === undefined) {
            delete data.avatar
        } else {
            data.avatar = avatar
        }
    }, [data, avatars])

    const [reqUserInfo, setReqUserInfo] = useState({})

    const requestUserInfo = async () => {
        const result = (userId) ? await userInfo(userId) : ""
        if (result) {
            setReqUserInfo(result.body)
        }
    }

    const onSubmit = async () => {

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key])
        }

        try {
            const result = await updateUser(uuid, formData, axiosPrivate)
            if (result) {
                requestUserInfo()
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        requestUserInfo()
    }, [userId, currentUser])

    const deleteUserPhoto = async () => {
        const result = await DeleteUserPhoto(axiosPrivate, uuid, token)
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
                                                            <img src={image?.data_url} alt=""/>
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
                                                                    onClick={() => {
                                                                        onImageRemove(index)
                                                                        deleteUserPhoto()
                                                                    }}
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
                                            emptySymbol={<img src="/img/icons/star-gray.svg"
                                                              alt="1"/>}
                                            fullSymbol={<img src="/img/icons/star-blue.svg" alt="1"/>}
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
                                                value="1"
                                                defaultChecked={(currentUser?.sex === 1)}
                                                onChange={(e) => setSex(e.target.value)}
                                            />
                                            <span className="fs-11 ms-2">Женский</span>
                                        </label>
                                        <label>
                                            <input
                                                name="sex"
                                                type="radio"
                                                className="fs-11"
                                                value="0"
                                                defaultChecked={(currentUser?.sex === 0)}
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
                                        checkedOpt={[day]}
                                        options={days.map(i => ({index: i, value: `${i}`}))}
                                        callback={({checkedIndex}) => setDay(checkedIndex)}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt={[month]}
                                        options={months}
                                        callback={({checkedIndex}) => setMonth(checkedIndex + 1)}
                                    />
                                    <CustomSelect
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOpt={[year]}
                                        options={years.map(i => ({index: i, value: `${i}`}))}
                                        callback={({checkedIndex}) => setYear(checkedIndex)}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <InputMask
                                        mask="79999999999"
                                        alwaysShowMask={true}
                                        maskPlaceholder="7__________"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
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
                            >
                                Сохранить
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
                {(currentUser && token) ?
                    <>
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
                                                                        <img src={image?.data_url} alt=""/>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                )}
                                            </ImageUploading>
                                        </div>
                                        <div>
                                            <div
                                                className="fs-15 fw-7 text-center mt-3 mt-sm-4">{currentUser?.firstName} {currentUser?.lastName}</div>
                                            <div className="rating justify-content-center mt-1 mt-sm-5">
                                                <Rating
                                                    readonly={true}
                                                    initialRating={currentUser?.rating}
                                                    fractions={2}
                                                    emptySymbol={<img src="/img/icons/star-gray.svg"
                                                                      alt="1"/>}
                                                    fullSymbol={<img src="/img/icons/star-blue.svg"
                                                                     alt="1"/>}
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
                                            <input defaultValue={reqUserInfo?.firstName} disabled className="fs-11"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                        <div className="col-sm-8">
                                            <input defaultValue={reqUserInfo?.lastName} disabled className="fs-11"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                        <div className="col-sm-8">
                                            <input defaultValue={reqUserInfo?.sexForUser} disabled className="fs-11"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Дата рождения:</div>
                                        <div className="col-sm-8 d-flex">
                                            <input defaultValue={reqUserInfo?.birthdayForUser} disabled
                                                   className="fs-11"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                        <div className="col-sm-8">
                                            <InputMask disabled mask="+7 (999) 999 99 99"
                                                       value={reqUserInfo?.phone ? reqUserInfo?.phone : ""}/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                        <div className="col-sm-8">
                                            <input defaultValue={reqUserInfo?.email} className="fs-11" disabled/>
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
                                    >
                                        Редактировать
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                    :
                    <AuthError/>
                }
            </div>
    )
}