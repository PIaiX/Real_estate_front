import React from 'react';

const AboutStead = (
    {
        onChange,
        activeField,
        seterActiveField,
        resetValid,
        valid,
        info
    }) => {

    return (
        <fieldset data-show={(activeField === 2) ? 'true' : 'false'} name="anchor-2"
                  className="element frame p-lg-4 mb-4 mb-lg-5">
            <legend className="text-center text-lg-start title-font fw-7 fs-15 mb-md-4">Об объекте
            </legend>
            <div className="row align-items-center">
                <div
                    className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0"
                    style={{color: valid.isInValidAcres ? '#DA1E2A' : ''}}
                >
                    Площадь, соток*:
                </div>
                <div className="col-md-9">
                    <input
                        type="number"
                        style={{borderColor: valid.isInValidAcres ? '#DA1E2A' : ''}}
                        name="acres"
                        value={info?.acres || ''}
                        className="area fs-11"
                        placeholder='0'
                        onChange={(e) => {
                            onChange(e)
                            resetValid(e, 'isInValidAcres')
                        }}
                    />
                </div>
            </div>
            <hr className="d-none d-md-block my-4"/>
            <div className="row align-items-center">
                <div className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0">Расстояние до города:</div>
                <div className="col-md-9">
                    <input
                        type="number"
                        name="cityDistance"
                        value={info?.cityDistance || ''}
                        className="fs-11"
                        placeholder='км'
                        onChange={e => onChange(e)}
                    />
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

export default AboutStead;