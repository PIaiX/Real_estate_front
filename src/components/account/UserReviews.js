import React from 'react';
import { Link } from 'react-router-dom';
import InputRating from '../utilities/InputRating';

export default function UserReviews() {
    return (
        <div className="px-2 px-sm-4 px-xxl-5 pb-4 pb-xxl-5">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Отзывы</h4>
            <div className="review mb-3">
                <img src="/Real_estate_front/img/photo2.png" alt="Андрей Шевцов" className="photo d-none d-sm-block"/>
                <div className="ms-sm-4">
                    <div className="d-flex align-items-end align-items-sm-center d-sm-block mb-2 mb-sm-0">
                        <img src="/Real_estate_front/img/photo2.png" alt="Андрей Шевцов" className="photo d-block d-sm-none"/>
                        <div className="ms-3 ms-sm-0">
                            <h4>Андрей Шевцов</h4>
                            <h4 className="mb-0">Риелтор</h4>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</p>
                    </div>
                    <div className="top">
                        <div className="fs-11 gray-3">21.09.21</div>
                        <div className="rating mt-1 mt-sm-2">
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>
                        </div>
                    </div>
                    <div className="btns d-flex align-items-center fs-09">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-review" className="color-1 d-flex align-items-center">
                            <img src="/Real_estate_front/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-review" className="ms-4 color-1 d-flex align-items-center">
                            <img src="/Real_estate_front/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="review mb-3">
                <img src="/Real_estate_front/img/photo2.png" alt="Андрей Шевцов" className="photo d-none d-sm-block"/>
                <div className="ms-sm-4">
                    <div className="d-flex align-items-end align-items-sm-center d-sm-block mb-2 mb-sm-0">
                        <img src="/Real_estate_front/img/photo2.png" alt="Андрей Шевцов" className="photo d-block d-sm-none"/>
                        <div className="ms-3 ms-sm-0">
                            <h4>Андрей Шевцов</h4>
                            <h4 className="mb-0">Риелтор</h4>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</p>
                    </div>
                    <div className="top">
                        <div className="fs-11 gray-3">21.09.21</div>
                        <div className="rating mt-1 mt-sm-2">
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-blue.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>
                            <img src="/Real_estate_front/img/icons/star-gray.svg" alt="1"/>
                        </div>
                    </div>
                    <div className="btns d-flex align-items-center fs-09">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-review" className="color-1 d-flex align-items-center">
                            <img src="/Real_estate_front/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#delete-review" className="ms-4 color-1 d-flex align-items-center">
                            <img src="/Real_estate_front/img/icons/pa-10.svg" alt="Удалить"/>
                            <span className="ms-2">Удалить</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="write-review" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <h4 className="text-center color-1 mb-2 mb-sm-4">Оставьте отзыв</h4>
                            <form>
                                <div className="row">
                                    <div className="col-lg-4 d-flex flex-lg-column align-items-center mb-2 mb-sm-4 mb-lg-0">
                                        <div className="photo me-3 me-lg-0 mb-lg-3">
                                            <img src="/Real_estate_front/img/photo.png" alt="Колесникова Ирина"/>
                                            <div className="indicator online"></div>
                                        </div>
                                        <div className="text-lg-center">
                                            <div className="fs-11 fw-5 mb-sm-2">Колесникова Ирина</div>
                                            <div className="fs-11 fw-5">Риелтор</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="d-flex align-items-center">
                                            <span className="fs-11 me-4">Ваша оценка:</span>
                                            <InputRating name="user-review" value={3}/>
                                        </div>
                                        <textarea className="mt-3" rows="6" placeholder="Напишите отзвыв">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</textarea>
                                        <button type="submit" className="btn btn-1 fs-12 ms-auto mt-3">ОТПРАВИТЬ</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="delete-review" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <div className="text-center fs-15 fw-6 title-font my-5">Вы уверены что хотите удалить отзыв?</div>
                            <div className="row row-cols-2">
                                <div>
                                    <button type="button" data-bs-dismiss="modal" className="btn btn-2 w-100 fs-11 text-uppercase">Отмена</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100 fs-11 text-uppercase">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
