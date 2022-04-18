import React from 'react';
import { Link } from 'react-router-dom';

export default function Password1() {
    return (
        <main className="account py-sm-3 py-md-4 py-lg-5">
            <section className="container">
                <Link to="/" className="d-flex align-items-center mt-3 mb-4 mb-sm-5">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E" stroke-width="2"/>
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E" stroke-width="2"/>
                    </svg>
                    <span className="fs-09 ms-1 ms-md-3">На главную</span>
                </Link>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <form className="entrance">
                            <h1 className="text-center mb-4 mb-xxl-5">Восстановление пароля</h1>
                            <div className="row align-items-center mb-3 mb-sm-4 mb-xxl-5">
                                <div className="col-sm-3 fs-11 mb-1 mb-sm-0">Email:</div>
                                <div className="col-sm-9">
                                    <input placeholder="mail@mail.ru" className="fs-11"/>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-sm-9">
                                    <div className='row align-items-center flex-sm-row-reverse'>
                                        <div className='col-sm-7'>
                                            <Link to="/password-2" className='btn btn-1 fs-11 w-100 text-uppercase px-2 mb-3 mb-sm-0'>Восстановить пароль</Link>
                                        </div>
                                        <div className='col-sm-5 text-center text-sm-start'>
                                            <Link to="/entrance" className="color-1 bb-1">Я вспомнил пароль</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
