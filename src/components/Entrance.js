import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { useDispatch, useSelector } from "react-redux";
import accessTokenActions from "../store/actions/accessToken";
import currentUserActions from "../store/actions/currentUser";

import InputPassword from "./utilities/InputPassword";
import FormErrorMessage from "./utilities/FormErrorMessage";
import { bindActionCreators } from "redux";

import useAxiosPrivate from "./hooks/useAxiosPrivate";
import {resetToken} from "../store/actions/actionTypes";

const formValueDefault = { email: "", password: "", remember: false };
const formErrorDefault = { email: "", password: "" };

const baseUrl = "https://api.antontig.beget.tech";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(4)
    .max(50)
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
    .max(20)
    .required()
    .messages({
      "string.empty": "Пароль не может быть пустым",
      "string.pattern.base":
        "Пароль должен содержать одну заглавную букву и одну цифру",
      "string.min": `Пароль не может быть короче 8 символов`,
      "string.max": `Пароль не может быть длиннее 20 символов`,
    }),
  remember: Joi.boolean(),
});

export default function Entrance() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.accessToken);

  useEffect(() => {
    if (currentUser) navigate("/personal-account");
  }, []);

  const axiosPrivate = useAxiosPrivate();

  const [formValue, setFormValue] = useState(formValueDefault);
  const [formErrors, setFormErrors] = useState(formErrorDefault);

  const dispatch = useDispatch();
  const { setToken } = bindActionCreators(accessTokenActions, dispatch);
  const { setCurrentUser } = bindActionCreators(currentUserActions, dispatch);

  const handleFormChange = (e) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type !== "checkbox" ? e.target.value : e.target.checked,
      };
    });
    setFormErrors((prev) => {
      return { ...prev, [e.target.name]: "" };
    });
  };

  const handleFormSubmit = async () => {
    const result = schema.validate(formValue, { abortEarly: false });

    if (result.error) {
      handleFormErrors(result.error.details);
      return;
    }

    try {
      const response = await axiosPrivate.post(`${baseUrl}/api/auth/login`, formValue);
      if (response.data.status === 200) {
        setToken(response.data.body.token);
        setCurrentUser(response.data.body.user);
        navigate("/personal-account");
      }
    } catch (error) {
      setFormErrors((prev) => {
        return { ...prev, password: "Пользователь не найден" };
      });
    }
  };

  const handleFormErrors = (errors) => {
    errors.forEach((formField) => {
      setFormErrors((prev) => {
        return { ...prev, [formField.path[0]]: formField.message };
      });
    });
  };
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
              <h1 className="text-center mb-4 mb-xxl-5">Вход</h1>
              <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Email:</div>
                <div className="col-sm-9">
                  <input
                    placeholder="mail@mail.ru"
                    className="fs-11"
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
              <div className="row justify-content-end mb-3 mb-sm-4 mb-xxl-5">
                <div className="col-sm-9 d-flex justify-content-between">
                  <label className="fs-11">
                    <input
                      type="checkbox"
                      name="remember"
                      value={formValue.remember}
                      onChange={handleFormChange}
                    />
                    <span className="ms-3">Запомнить меня</span>
                  </label>
                  <Link to="/password-1" className="color-1 fs-11 bb-1">
                    Забыли пароль?
                  </Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-5">
                  <div
                    to="/personal-account"
                    className="btn btn-1 fs-11 w-100 text-uppercase mb-4"
                    onClick={handleFormSubmit}
                  >
                    Войти
                  </div>
                </div>
                <div className="col-12">
                  <div className="fs-11 text-center">
                    У Вас еще нет аккаунта?{" "}
                    <Link to="/registration" className="color-1 bb-1">
                      Зарегистрироваться
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
