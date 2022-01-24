import React from 'react'

export default function PersonalAccount() {
    return (
        <main>
            <section className="container mt-5 mb-6">
                <h1 className="text-center text-lg-start">Личный кабинет</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="frame p-4">
                            <nav>
                                <ul>
                                    <li>Профиль</li>
                                    <li>Мои объявления</li>
                                    <li>Мои услуги</li>
                                    <li>Избранное</li>
                                    <li>Сообщения</li>
                                    <li>Отзывы</li>
                                    <li>Выйти</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="frame p-4">
                            <h4 className="text-center color-1">Профиль</h4>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-4 fs-11">Имя:</div>
                                        <div className="col-8">
                                            <input placeholder="Колесникова" className="fs-11"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
