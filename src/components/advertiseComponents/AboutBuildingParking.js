import React, {useState} from 'react';

const AboutBuildingParking = ({onChange, activeField, seterActiveField, resetValid, valid}) => {

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
                        className="fs-11"
                        name='yearOfConstruction'
                        style={{borderColor: valid.isInValidYear ? '#DA1E2A' : ''}}
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
                <div className="col-md-3 fs-11 title mb-3 m-md-0" style={{color: valid.isInValidParking ? '#DA1E2A' : ''}}>Парковка*:</div>
                <div className="col-md-9 row row-cols-2 row-cols-xl-3">
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasGroundParking"
                                onChange={e => {
                                    onChange(e)
                                    resetValid(e, 'isInValidParking')
                                }}
                            />
                            <span className="fs-11 ms-3">Наземная</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasUnderGroundParking"
                                onChange={e => {
                                    onChange(e)
                                    resetValid(e, 'isInValidParking')
                                }}
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
                                name="hasOpenInDvor"
                                onChange={e => onChange(e)}
                            />
                            <span className="fs-11 ms-3">Открытая во дворе</span>
                        </label>
                    </div>
                    <div>
                        <label className="mb-3">
                            <input
                                type="checkbox"
                                name="hasInDvorPerPalka"
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

export default AboutBuildingParking;