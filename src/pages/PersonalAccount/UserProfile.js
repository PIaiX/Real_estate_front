import React, {useEffect, useState} from "react";
import CustomSelect from "../../components/CustomSelect";
import ImageUploading from "react-images-uploading";
import {Link} from "react-router-dom";
import {useAccessToken, useCurrentUser} from "../../store/reducers";
import InputMask from 'react-input-mask';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Rating from "react-rating";
import {DeleteUserPhoto, updateUser} from "../../API/users";
import {bindActionCreators} from "redux";
import currentUserActions from "../../store/actions/currentUser";
import {useDispatch} from "react-redux";
import PhoneInput from "react-phone-input-2";
import {animateScroll as scroll} from "react-scroll";

export default function UserProfile() {

    const axiosPrivate = useAxiosPrivate();
    const token = useAccessToken()
    const currentUser = useCurrentUser()
    const sait = 'https://api.antontig.beget.tech/uploads/';
    const [avatars, setAvatars] = useState([{data_url: "/img/img-photo.svg"}]);
    const uuid = currentUser?.uuid;
    let startYear = new Date().getFullYear();
    let startMonth = new Date().getMonth()
    let startDay = new Date().getDate()
    const dispatch = useDispatch();
    const currentBirthDayDay = (currentUser?.birthdayForUser)?.split('.')[0]
    const currentBirthDayMonth = (currentUser?.birthdayForUser)?.split('.')[1]
    const currentBirthDayYear = (currentUser?.birthdayForUser)?.split('.')[2]
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch);
    useEffect(() => {
        if (currentUser) {
            setFirstName(currentUser?.firstName)
            setLastName(currentUser?.lastName)
            setPhone(currentUser?.phone)
            setEmail(currentUser?.email)
            setSex(currentUser?.sex)
            setDay(+currentBirthDayDay || startDay - 1)
            setMonth(+currentBirthDayMonth - 1 || startMonth)
            setYear(currentBirthDayYear || startYear)
            setAvatar(currentUser?.avatar)
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
    const [monthText, setMonthText] = useState('')
    const [year, setYear] = useState('')
    const months = [
        "января", 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ]

    const createYears = () => {
        let years = [];
        for (startYear; startYear >= 1940; startYear--) {
            years.push(startYear)
        }
        return years
    }

    const createDays = () => {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i)
        }
        return days
    }

    const birthday = (year, month, day) => {
        const formatDate = new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
        const date = new Date(year, month, day)
        return formatDate.format(date)
    }

    const [avatar, setAvatar] = useState([])

    const data = {
        avatar,
        firstName,
        lastName,
        sex,
        birthday: birthday(year, month, day),
        phone,
        isSubscribed,
        email,
        token,
    }

    const findMonth = (month) => {
        return months.find((i, index) => month === index)
    }

    useEffect(() => {
        setMonthText(findMonth(month))
    }, [month])

    useEffect(() => {
        setAvatar(avatars[0]?.file)
        if (avatar === undefined) {
            delete data.avatar
        } else {
            data.avatar = avatar
        }
    }, [data, avatars])

    const fields = {
        isInValidFirstName: false,
        isInValidLastName: false,
        isInValidSex: false,
        isInValidPhone: false,
        isInValidEmail: false
    }

    const [valid, setValid] = useState(fields);

    const onSubmit = async (e) => {
        e.preventDefault()

        const validMail = email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

        const isInValidFirstName = data?.firstName === undefined || data?.firstName?.length <= 0
        const isInValidLastName = data.lastName === undefined || data?.lastName?.length <= 0
        const isInValidSex = data?.sex === undefined || data?.sex === null
        const isInValidPhone = data?.phone === undefined || data?.phone?.length > 11 || data?.phone?.length < 11 || data?.phone === null
        const isInValidEmail = data?.email === undefined || validMail === undefined || validMail === null

        if (isInValidFirstName) {
            setValid({...valid, isInValidFirstName: true})
        } else if (isInValidLastName) {
            setValid({...valid, isInValidLastName: true})
        } else if (isInValidSex) {
            setValid({...valid, isInValidSex: true})
        } else if (isInValidPhone) {
            setValid({...valid, isInValidPhone: true})
        } else if (isInValidEmail) {
            setValid({...valid, isInValidEmail: true})
        } else {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key])
            }
            await updateUser(uuid, formData, axiosPrivate)
                .then((response) => {
                    setCurrentUser(response || null);
                    redactorSwitcher()
                })
                .catch(() => {
                    setRedactor(true)
                })
        }
    }

    const resetFieldVal = (newState, field) => {
        setValid({...valid, [field]: false})
    }

    const deleteUserPhoto = async () => {
        await DeleteUserPhoto(axiosPrivate, uuid, token)
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
                                                                        src="/img/icons/edit.svg"
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
                                                                        src="/img/icons/delete2.svg"
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
                                <div
                                    className="col-sm-4 fs-11 mb-1 mb-sm-0"
                                    style={{color: valid.isInValidFirstName ? '#DA1E2A' : ''}}
                                >
                                    Имя:
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={data.firstName}
                                        placeholder="Имя"
                                        className="fs-11"
                                        onChange={(e) => {
                                            setFirstName(e.target.value)
                                            resetFieldVal(e, 'isInValidFirstName')
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div
                                    className="col-sm-4 fs-11 mb-1 mb-sm-0"
                                    style={{color: valid.isInValidLastName ? '#DA1E2A' : ''}}
                                >
                                    Фамилия:
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        name="lastName"
                                        type="text"
                                        value={data.lastName}
                                        placeholder="Фамилия"
                                        className="fs-11"
                                        onChange={(e) => {
                                            setLastName(e.target.value)
                                            resetFieldVal(e, 'isInValidLastName')
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div
                                    className="col-sm-4 fs-11 mb-1 mb-sm-0"
                                    style={{color: valid.isInValidSex ? '#DA1E2A' : ''}}
                                >
                                    Пол:
                                </div>
                                <div className="col-sm-8">
                                    <div className="row row-cols-2">
                                        <label>
                                            <input
                                                name="sex"
                                                type="radio"
                                                className="fs-11"
                                                value="1"
                                                defaultChecked={(currentUser?.sex === 1)}
                                                onChange={(e) => {
                                                    setSex(e.target.value)
                                                    resetFieldVal(e, 'isInValidSex')
                                                }}
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
                                                onChange={(e) => {
                                                    setSex(e.target.value)
                                                    resetFieldVal(e, 'isInValidSex')
                                                }}
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
                                        title={!day ? ' ' : null}
                                        className="flex-1"
                                        btnClass="inp"
                                        checkedOptions={[day]}
                                        options={createDays()}
                                        callback={({title}) => setDay(title)}
                                    />
                                    <CustomSelect
                                        title={!monthText ? ' ' : null}
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOptions={[monthText]}
                                        options={months}
                                        callback={({title, value}) => {
                                            setMonth(value)
                                            setMonthText(title)
                                        }}
                                    />
                                    <CustomSelect
                                        title={!year ? ' ' : null}
                                        className="flex-1 ms-2 ms-xxl-4"
                                        btnClass="inp"
                                        checkedOptions={[year]}
                                        options={createYears()}
                                        callback={({title}) => setYear(title)}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div
                                    className="col-sm-4 fs-11 mb-1 mb-sm-0"
                                    style={{color: valid.isInValidPhone ? '#DA1E2A' : ''}}
                                >
                                    Телефон:
                                </div>
                                <div className="col-sm-8">
                                    <PhoneInput
                                        inputStyle={{backgroundColor: '#fff', fontSize: '1.1em', lineHeight: "inherit"}}
                                        specialLabel={''}
                                        country={'ru'}
                                        countryCodeEditable={false}
                                        disableDropdown={true}
                                        value={phone}
                                        onChange={(phone) => {
                                            setPhone(phone)
                                            resetFieldVal(phone, 'isInValidPhone')
                                        }}
                                    />
                                    <div className="fs-09 gray-3 mt-1">Телефон будет виден в объявлениях другим
                                        пользователям
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div
                                    className="col-sm-4 fs-11 mb-1 mb-sm-0"
                                    style={{color: valid.isInValidEmail ? '#DA1E2A' : ''}}
                                >
                                    Email:
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        name="email"
                                        type="text"
                                        value={data.email}
                                        placeholder="Email@mail.com"
                                        className="fs-11"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            resetFieldVal(e, 'isInValidEmail')
                                        }}
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
                            <button
                                type="button"
                                className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                onClick={() => {
                                    redactorSwitcher();
                                }}
                            >
                                Назад
                            </button>
                            <button
                                type="button"
                                className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                onClick={(e) => {
                                    onSubmit(e);
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
                <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Профиль</h4>
                <div className="form-profile">
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
                                            initialRating={currentUser?.rating || 0}
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
                                    <input value={currentUser?.firstName || ''} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.lastName || ''} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Пол:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.sexForUser || ''} disabled className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Дата рождения:</div>
                                <div className="col-sm-8 d-flex">
                                    <input value={currentUser?.birthdayForUser || ''} disabled
                                           className="fs-11"/>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Телефон:</div>
                                <div className="col-sm-8">
                                    <PhoneInput
                                        inputStyle={{backgroundColor: '#fff',color: '#545454', fontSize: '1.1em', lineHeight: "inherit"}}
                                        disableDropdown={true}
                                        specialLabel={''}
                                        disabled={true}
                                        placeholder={currentUser?.phone ? currentUser?.phone : "Не установлен"}
                                        value={currentUser?.phone || 0}
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-4 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-8">
                                    <input value={currentUser?.email || ''} className="fs-11" disabled/>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-1 fs-11 text-uppercase mt-4 mt-xxl-5 ms-auto me-auto me-xl-0"
                                onClick={() => {
                                    redactorSwitcher()
                                }}
                            >
                                Редактировать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}