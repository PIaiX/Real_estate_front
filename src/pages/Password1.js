import React, { useState } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";
import FormErrorMessage from "../components/FormErrorMessage";
import {resetPassword} from "../API/changePassword";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../../src/store/actions/alert"

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(4)
    .required()
    .messages({
      "string.empty": "Email адрес не может быть пустым",
      "string.min": `Email адрес не может быть короче 4 символов`,
      "string.max": `Email адрес не может быть длиннее 20 символов`,
      "string.email": `Введите Email адрес корректного формата`,
    }),
});

export default function Password1() {
  const [formValue, setFormValue] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({ email: "" });
  const dispatch = useDispatch()
  const {setAlert} = bindActionCreators(alertActions, dispatch)

  const handleFormChange = (e) => {
    setFormValue((prev) => {
      return { ...prev, email: e.target.value };
    });

    setFormErrors((prev) => {
      return { ...prev, email: "" };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const result = schema.validate(formValue, { abortEarly: false });
    if (result.error) {
      handleFormErrors(result.error.details);
      return;
    }

    localStorage.setItem('email', formValue.email)

    resetPassword(formValue.email)
        .then(() => {
          setAlert('success', true, 'Письмо отправлено вам на почту, следуйте дальнейшим указаниям, проверьте папку "спам"')
        })
        .catch(() => {
          setAlert('danger', true, 'Произошла ошибка')
        })
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
              <h1 className="text-center mb-4 mb-xxl-5">
                Восстановление пароля
              </h1>
              <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Email:</div>
                <div className="col-sm-9">
                  <input
                    value={formValue.email}
                    onChange={handleFormChange}
                    placeholder="mail@mail.ru"
                    className="fs-11"
                  />
                  <FormErrorMessage>{formErrors.email}</FormErrorMessage>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-sm-9">
                  <div className="row align-items-center flex-sm-row-reverse">
                    <div className="col-sm-7">
                      <button
                        onClick={e => handleFormSubmit(e)}
                        className="btn btn-1 fs-11 w-100 text-uppercase px-2 mb-3 mb-sm-0"
                      >
                        Восстановить пароль
                      </button>
                    </div>
                    <div className="col-sm-5 text-center text-sm-start">
                      <Link to="/login" className="color-1 bb-1">
                        Я вспомнил пароль
                      </Link>
                    </div>
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
