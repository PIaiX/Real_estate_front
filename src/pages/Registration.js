import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Joi from "joi";

import InputPassword from "../components/InputPassword";
import FormErrorMessage from "../components/FormErrorMessage";
import {registration} from "../API/auths";

const formValueDefault = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    remember: true,
    ownerType: "0",
};

const formErrorDefault = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    companyName: "",
    taxIdentificationNumber: ""
};

const schema = Joi.object({
    firstName: Joi.string().min(4).max(20).required().messages({
        "string.empty": "Имя не может быть пустым",
        "string.min": `Имя не может быть короче 4 символов`,
        "string.max": `Имя не может быть длиннее 20 символов`,
    }),
    lastName: Joi.string().min(4).max(20).required().messages({
        "string.empty": "Фамилия не может быть пустой",
        "string.min": `Фамилия не может быть короче 4 символов`,
        "string.max": `Фамилия не может быть длиннее 20 символов`,
    }),
    email: Joi.string()
        .email({tlds: {allow: false}})
        .min(4)
        .required()
        .messages({
            "string.empty": "Email адрес не может быть пустым",
            "string.min": `Email адрес не может быть короче 4 символов`,
            "string.max": `Email адрес не может быть длиннее 20 символов`,
            "string.email": `Введите Email адрес корректного формата`,
        }),
    password: Joi.string()
        .pattern(/.*[A-Z].*/)
        .pattern(/.*[0-9].*/)
        .min(8)
        .required()
        .messages({
            "string.empty": "Пароль не может быть пустым",
            "string.pattern.base":
                "Пароль должен содержать одну заглавную букву и одну цифру",
            "string.min": `Пароль не может быть короче 8 символов`,
            "string.max": `Пароль не может быть длиннее 20 символов`,
        }),
    passwordConfirm: Joi.string().required().messages({
        "string.empty": "Подтверждение пароля не может быть пустым",
    }),
    ownerType: Joi.number(),
    remember: Joi.boolean(),
    taxIdentificationNumber: Joi.string()
        .pattern(/.*[0-9].*/)
        .min(10)
        .max(10)
        .required()
        .messages({
            "string.empty": "Заполните ИНН",
            "string.pattern.base": "ИНН состоит только из цифр",
            "string.min": "Минимальная длина 10 символов",
            "string.max": "Максимальная длина 10 символов"
        }),
    companyName: Joi.string()
        .required()
        .messages({
            "string.empty": "Заполните название организации",
        })
});

export default function Entrance() {

    const [formValue, setFormValue] = useState(formValueDefault);
    const [ownerType, setOwnerType] = useState(formValueDefault.ownerType);
    const [formErrors, setFormErrors] = useState(formErrorDefault);

    useEffect(() => {
        if (formValue?.ownerType === '0'){
            delete formValue.companyName
            delete formValue.taxIdentificationNumber
        } else {
            setFormValue(prevState => (
                {
                    ...prevState,
                    companyName: "",
                    taxIdentificationNumber: ""
                }))
        }
    }, [formValue?.ownerType])

    const handleFormChange = (e) => {
        setFormValue((prev) => {
            return {
                ...prev,
                [e.target.name]:
                    e.target.type === "checkbox" ? e.target.checked : e.target.value,
            };
        });
        setFormErrors((prev) => {
            return {...prev, [e.target.name]: ""};
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const result = schema.validate(formValue, {abortEarly: false});
        if (result.error) {
            handleFormErrors(result.error.details);
            return;
        }

        if (formValue.password !== formValue.passwordConfirm) {
            return setFormErrors((prev) => {
                return {...prev, passwordConfirm: "Пароли не совпадают"};
            });
        }

        registration(formValue, ownerType)
            .then(() => {
                alert("Форма отправлена")
            })
            .catch(() => {
                setFormErrors((prev) => {
                    return {
                        ...prev,
                        email: "Пользователь с текущим адресом эл.почты уже существует",
                    };
                })
            })
    };

    const handleFormErrors = (errors) => {
        errors.forEach((formField) => {
            setFormErrors((prev) => {
                return {...prev, [formField.path[0]]: formField.message};
            });
        });
    };

    console.log(formValue)

    return (
        <main className="account py-sm-3 py-md-4 py-lg-5">
            <section className="container">
                <Link to="/" className="d-flex align-items-center mt-3 mb-4 mb-sm-5">
                    <svg
                        width="12"
                        height="23"
                        viewBox="0 0 12 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            y1="-1"
                            x2="14.5309"
                            y2="-1"
                            transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)"
                            stroke="#C59C7E"
                            strokeWidth="2"
                        />
                        <line
                            y1="-1"
                            x2="14.5309"
                            y2="-1"
                            transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)"
                            stroke="#C59C7E"
                            strokeWidth="2"
                        />
                    </svg>
                    <span className="fs-09 ms-1 ms-md-3">На главную</span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <form className="entrance">
                            <h1 className="text-center mb-4 mb-xxl-5">Регистрация</h1>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                  <span data-for="owner" data-status={false}>
                    Владелец объявления*:
                  </span>
                                </div>
                                <div className="col-md-9 mb-5">
                                    <div className="d-flex align-items-center">
                                        <div className="me-5">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="ownerType"
                                                    value="0"
                                                    defaultChecked={true}
                                                    onChange={handleFormChange}
                                                />
                                                <span className="fs-11 ms-2">Физическое лицо</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="ownerType"
                                                    value="1"
                                                    onChange={handleFormChange}
                                                />
                                                <span className="fs-11 ms-2">Юридическое лицо</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Имя:</div>
                                <div className="col-sm-9">
                                    <input
                                        placeholder="Ирина"
                                        className="fs-11"
                                        name="firstName"
                                        value={formValue.firstName}
                                        onChange={handleFormChange}
                                    />
                                    <FormErrorMessage>{formErrors.firstName}</FormErrorMessage>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Фамилия:</div>
                                <div className="col-sm-9">
                                    <input
                                        placeholder="Колесникова"
                                        className="fs-11"
                                        name="lastName"
                                        value={formValue.lastName}
                                        onChange={handleFormChange}
                                    />
                                    <FormErrorMessage>{formErrors.lastName}</FormErrorMessage>
                                </div>
                            </div>
                            {formValue?.ownerType === '1' &&
                                <>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Название организации:</div>
                                        <div className="col-sm-9">
                                            <input
                                                placeholder="Название организации"
                                                className="fs-11"
                                                name="companyName"
                                                value={formValue.companyName}
                                                onChange={handleFormChange}
                                            />
                                            <FormErrorMessage>{formErrors.companyName}</FormErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                        <div className="col-sm-3 fs-11 mb-1 mb-sm-0">ИНН:</div>
                                        <div className="col-sm-9">
                                            <input
                                                placeholder="ИНН"
                                                className="fs-11"
                                                name="taxIdentificationNumber"
                                                value={formValue.taxIdentificationNumber}
                                                onChange={handleFormChange}
                                            />
                                            <FormErrorMessage>{formErrors.taxIdentificationNumber}</FormErrorMessage>
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-9">
                                    <input
                                        placeholder="mail@mail.ru"
                                        className="fs-11"
                                        type='email'
                                        name="email"
                                        value={formValue.email}
                                        onChange={handleFormChange}
                                    />
                                    <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Пароль:</div>
                                <div className="col-sm-9">
                                    <InputPassword
                                        name="password"
                                        visible={false}
                                        onChange={handleFormChange}
                                        value={formValue.password}
                                    />
                                    <FormErrorMessage>{formErrors.password}</FormErrorMessage>
                                </div>
                            </div>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">
                                    Подтверждение пароля:
                                </div>
                                <div className="col-sm-9">
                                    <InputPassword
                                        name="passwordConfirm"
                                        visible={false}
                                        onChange={handleFormChange}
                                        value={formValue.passwordConfirm}
                                    />
                                    <FormErrorMessage>
                                        {formErrors.passwordConfirm}
                                    </FormErrorMessage>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-8 col-lg-6">
                                    <button
                                        className="btn btn-1 fs-11 w-100 text-uppercase mb-4"
                                        onClick={handleFormSubmit}
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                                <div className="col-12">
                                    <div className="fs-09 text-center gray-3 mb-4">
                                        Нажимая на кнопку “Зарегистрироваться”, вы принимаете
                                        условия пользовательского сглашения
                                    </div>
                                    <div className="fs-11 text-center">
                                        У Вас уже аккаунт?{" "}
                                        <Link to="/login" className="color-1 bb-1">
                                            Войти
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
