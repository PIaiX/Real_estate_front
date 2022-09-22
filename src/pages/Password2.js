import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import InputPassword from '../components/InputPassword';
import {changePassword} from "../API/changePassword";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert";

export default function Password2() {

    const {token} = useParams()
    const [formValue, setFormValue] = useState({})
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)
    const [passwordValidation, setPasswordValidation] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setFormValue({
            token,
            email: localStorage.getItem('email')
        })
    }, [token])

    const password = useCallback((e) => {
        setFormValue(prevState => ({...prevState, password: e.target.value}))
        setPasswordValidation('')
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        const regWord = /[A-Z]/
        const regNum = /[0-9]/
        if (formValue?.password?.length === undefined) {
            setPasswordValidation('Введите пароль')
        } else if (formValue?.password?.length < 8) {
            setPasswordValidation("Пароль должен быть от 8 символов")
        } else if (!(regWord.test(formValue?.password))) {
            setPasswordValidation("Пароль должен содержать заглавную букву")
        } else if (!(regNum.test(formValue?.password))) {
            setPasswordValidation("Пароль должен содержать хотя бы одну цифру")
        } else {
            changePassword(formValue)
                .then(() => {
                    setAlert('success', true, 'Пароль успешно изменен, переход на страницу входа')
                    setTimeout(() => navigate('/login'), 2000)
                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка')
                })
        }
    }

    return (
        <main className="account py-sm-3 py-md-4 py-lg-5">
            <section className="container">
                <Link to="/" className="d-flex align-items-center mt-3 mb-4 mb-sm-5">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E" strokeWidth="2"/>
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E" strokeWidth="2"/>
                    </svg>
                    <span className="fs-09 ms-1 ms-md-3">На главную</span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <form className="entrance">
                            <h1 className="text-center mb-4 mb-xxl-5">Восстановление пароля</h1>
                            <div className="row align-items-baseline mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Пароль:</div>
                                <div className="col-sm-9">
                                    <InputPassword
                                        name="pass"
                                        visible={false}
                                        value={formValue.password || ''}
                                        onChange={(e) => password(e)}
                                    />
                                    <span className='fs-09' style={{color: "#DA1E2A"}}>{passwordValidation}</span>
                                    <div className="fs-08 gray-3 mt-2">
                                        <span>
                                            Пароль от 8 символов до 20, обязательны одна заглавная буква и одна цифра
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    <button
                                        type='button'
                                        className="btn btn-1 fs-11 w-100 text-uppercase px-4 mb-4"
                                        onClick={(e) => {
                                            onSubmit(e)
                                        }}
                                    >
                                        Восстановить пароль
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
