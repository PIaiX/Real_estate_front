import React from "react";
import {useNavigate} from "react-router-dom";


export default function AuthError() {

    const navigate = useNavigate()

    return (
        <>
            <div className="text-center">
                <p className="fw-6 fs-14">Эта функция доступна только <br/> авторизированным пользователям</p>
            </div>
            <div className="d-flex align-content-center mt-4 justify-content-center flex-wrap">
                <div className="m-2">
                    <button
                        type="submit"
                        className="btn btn-1 mx-auto fs-12"
                        onClick={() => navigate("/entrance")}
                    >
                        Войти
                    </button>
                </div>
                <div className="m-2">
                    <button
                        type="submit"
                        className="btn btn-2 mx-auto fs-12"
                        onClick={() => navigate("/registration")}
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </>
    )
}