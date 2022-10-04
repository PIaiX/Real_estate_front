import React, {useState} from 'react';

const AboutBuildingResidential = ({onChange, activeField, seterActiveField, valid, resetValid}) => {

    return (
        <fieldset data-show={(activeField === 4) ? 'true' : 'false'} name="anchor-4"
                  className="element frame p-lg-4 mb-4 mb-lg-5">
            <legend className="title-font fw-7 fs-15 mb-4">О здании</legend>
            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                <div
                    className='fs-11 title'
                    style={{color: valid.isInValidYear ? '#DA1E2A' : ''}}
                >
                    Год постройки*:
                </div>
                <div>
                    <input
                        type="number"
                        style={{borderColor: valid.isInValidYear ? '#DA1E2A' : ''}}
                        className="fs-11"
                        name='yearOfConstruction'
                        placeholder="1850-..."
                        onChange={e => {
                            onChange(e)
                            resetValid(e, 'isInValidYear')
                        }}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Тип дома:</div>
                <div className="col-md-9">
                    <div className="d-flex align-items-baseline flex-wrap">
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={0}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Кирпичный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={1}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Панельный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={2}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Монолитный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={3}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Блочный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={4}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Деревянный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={5}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Кирпично-монолитный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={6}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Керамзитный</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={7}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Газоблок</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={8}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Пеноблок</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={9}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Армолитовые блоки</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={10}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Сип-панели</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="houseBuildingType"
                                value={11}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Смешанные</span>
                        </label>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Лифт:</div>
                <div className="col-md-9">
                    <div className="d-flex align-items-baseline flex-wrap">
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="elevatorType"
                                value={0}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Нет</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="elevatorType"
                                value={1}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Пассажирский</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="elevatorType"
                                value={2}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Грузовой</span>
                        </label>
                        <label className="me-5 my-2">
                            <input
                                type="radio"
                                name="elevatorType"
                                value={3}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Пассажирский/Грузовой</span>
                        </label>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div
                    className="col-6 col-md-3 fs-11 title"
                    style={{color: valid?.isInValidCeilingHeight ? '#DA1E2A' : ''}}
                >
                    Высота потолков:
                </div>
                <div className="col-6 col-md-9">
                    <input
                        type="number"
                        placeholder="3-100"
                        style={{borderColor: valid?.isInValidCeilingHeight ? '#DA1E2A' : ''}}
                        name='ceilingHeight'
                        className="fs-11"
                        onChange={e => {
                            onChange(e)
                            resetValid(e, 'isInValidCeilingHeight')
                        }}
                    />
                    <span className="ms-2">м</span>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Пандус:</div>
                <div className="col-md-9 row row-cols-2">
                    <div>
                        <label className="me-5">
                            <input
                                type="radio"
                                name="hasRamp"
                                value={1}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Есть</span>
                        </label>
                    </div>
                    <div>
                        <label className="me-5">
                            <input
                                type="radio"
                                name="hasRamp"
                                value={0}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Нет</span>
                        </label>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Мусоропровод:</div>
                <div className="col-md-9 row row-cols-2">
                    <div>
                        <label className="me-5">
                            <input
                                type="radio"
                                name="hasGarbage"
                                value={1}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Есть</span>
                        </label>
                    </div>
                    <div>
                        <label className="me-5">
                            <input
                                type="radio"
                                name="hasGarbage"
                                value={0}
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-2">Нет</span>
                        </label>
                    </div>
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Парковка:</div>
                <div className="col-md-9 row row-cols-2 row-cols-xl-3">
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasGroundParking"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Наземная</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasUnderGroundParking"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Подземная</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasMoreLayerParking"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Многоуров.</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasYardParking"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Открытая во дворе</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasBarrierParking"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Во дворе за шлагбаумом</span>
                        </label>
                    </div>
                </div>
            </div>

            <div
                className="d-lg-none row row-cols-2 row-cols-sm-3 justify-content-center gx-2 gx-sm-4 mt-4">
                <div>
                    <button type="button" className="btn btn-2 w-100"
                            onClick={() => seterActiveField(3)}>Назад
                    </button>
                </div>
                <div>
                    <button type="button" className="btn btn-1 w-100"
                            onClick={() => seterActiveField(5)}>Далее
                    </button>
                </div>
            </div>
        </fieldset>
    );
};

export default AboutBuildingResidential;