import React from 'react';

const ForParkingAd = (props) => {

    return (
        <div className="column-2">
            {
                props?.estateType?.toLowerCase() === 'гараж' &&
                <div className="specification fs-11">
                    <div className="left">
                        <span>Расположение: </span>
                    </div>
                    <div className="right">
                        <span>{props?.locationTypeForUser}</span>
                    </div>
                </div>
            }
            <div className="specification fs-11">
                <div className="left">
                    <span>Общая площадь: </span>
                </div>
                <div className="right">
                    <span>{props?.totalArea} м<sup>2</sup></span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Охрана</span>
                </div>
                <div className="right">
                    {props?.hasSecurity ? <span>Есть</span> : <span>Нет</span>}
                </div>
            </div>
        </div>
    );
};

export default ForParkingAd;