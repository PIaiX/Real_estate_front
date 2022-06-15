import React, {useEffect, useState} from 'react';

const CityPopup = ({city, isDefinedCity, setIsShowCities}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (isDefinedCity) {
            handleShow()
        }
    }, [isDefinedCity])

    const onApplyCity = () => {
        localStorage.setItem('userCity', city)
        handleClose()
    }

    const onChangeCity = () => {
        setIsShowCities(true)
        handleClose()
    }

    return (
        <div className={`city-popup ${show ? 'show' : ''}`}>
            <div className="city-popup__header">
                <h4 className="city-popup__title">
                    Ваш город <strong>{city}?</strong>
                </h4>
            </div>
            <div className="city-popup__footer">
                <button
                    type="button"
                    className="btn btn-1 btn-sm"
                    onClick={onApplyCity}
                >
                    Всё верно
                </button>
                <button
                    type="button"
                    className="btn btn-2 btn-sm"
                    onClick={onChangeCity}
                >
                    Сменить город
                </button>
            </div>
        </div>
    );
};

export default CityPopup;