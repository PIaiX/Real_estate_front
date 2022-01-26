import React from 'react';
import InputRating from '../utilities/InputRating';

export default function UserReviews() {
    return (
        <div>
            <h4 className="text-center color-1 mb-5">Отзывы</h4>
            <div className="review mb-3">
                <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-none d-sm-block"/>
                <div className="ms-sm-4">
                    <div className="d-flex align-items-center d-sm-block mb-2 mb-sm-0">
                        <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-block d-sm-none"/>
                        <div className="ms-3 ms-sm-0">
                            <h4>Андрей Шевцов</h4>
                            <div className="rating mb-sm-3">
                                <span className="fs-12 ms-0">Оценка:</span>
                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</p>
                    </div>
                    <div className="date fs-11 gray-3">21.09.21</div>
                    <div className="btns d-flex align-items-center fs-09">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#write-review" className="color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-9.svg" alt="Редактировать"/>
                            <span className="ms-2">Редактировать</span>
                        </button>
                        <button type="button" className="ms-4 color-1 d-flex align-items-center">
                            <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
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
                                            <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
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
                                            <InputRating name="user-review"/>
                                        </div>
                                        <textarea className="mt-3" rows="6" placeholder="Напишите отзвыв"></textarea>
                                        <button type="submit" className="btn btn-1 fs-12 ms-auto mt-3">ОТПРАВИТЬ</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
