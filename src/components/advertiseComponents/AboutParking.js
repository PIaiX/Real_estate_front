import React from 'react';

const AboutParking = (
    {
        onChange,
        activeField,
        seterActiveField,
        estateName,
        valid,
        resetValid
    }) => {

    return (
        <fieldset data-show={(activeField === 2) ? 'true' : 'false'} name="anchor-2"
                  className="element frame p-lg-4 mb-4 mb-lg-5">
            <legend className="text-center text-lg-start title-font fw-7 fs-15 mb-md-4">Об объекте
            </legend>
            {
                estateName?.toLowerCase() === 'паркинг' &&
                    <div className="row align-items-center">
                        <div className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0">Название ЖК:</div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name="residentalComplex"
                                className="fs-11"
                                placeholder="Например: “Центральный”"
                                onChange={(e) => onChange(e)}
                            />
                        </div>
                    </div>
            }
            {
                estateName?.toLowerCase() === 'гараж' &&
                <>
                    <div className="row">
                        <div
                            className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0"
                        >
                    <span
                        data-for="housing-type"
                        data-status={false}
                    >
                       Расположение:
                    </span>
                        </div>
                        <div className="col-md-9">
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="locationType"
                                            value={0}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Отдельный</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="locationType"
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Кооператив</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            <hr className="d-none d-md-block my-4"/>
            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                <div
                    className="fs-11 title-req"
                >
                    <span
                        data-for="total-area"
                        data-status={false}
                        style={{color: valid.isInValidTotalAreaParking ? '#DA1E2A' : ''}}
                    >
                        Общая площадь*:
                    </span>
                </div>
                <div>
                    <input
                        type="number"
                        name="totalArea"
                        placeholder="0"
                        style={{borderColor: valid.isInValidTotalAreaParking ? '#DA1E2A' : ''}}
                        className="fs-11 area w-100"
                        onChange={(e) => {
                            onChange(e)
                            resetValid(e)
                        }}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row mt-4 mt-sm-5 mt-md-0">
                <div className="col-md-3 fs-11 title mb-3 m-md-0">Охрана:</div>
                <div className="col-md-9">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="hasSecurity"
                                    value={1}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Да</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="hasSecurity"
                                    value={0}
                                    onChange={e => onChange(e)}
                                />
                                <span className="fs-11 ms-2">Нет</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* для мобильных устроийств */}
            <div
                className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                <div>
                    <button type="button" className="btn btn-2 w-100"
                            onClick={() => seterActiveField(1)}>Назад
                    </button>
                </div>
                <div>
                    <button type="button" className="btn btn-1 w-100"
                            onClick={() => seterActiveField(3)}>Далее
                    </button>
                </div>
            </div>
        </fieldset>
    );
};

export default AboutParking;