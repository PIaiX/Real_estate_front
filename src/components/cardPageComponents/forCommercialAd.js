import React from 'react';

const ForCommercialAd = (props) => {
    return (
        <div className="column-2">
            <div className="specification fs-11">
                <div className="left">
                    <span>Тип здания: </span>
                </div>
                <div className="right">
                    <span>{props?.buildingType}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Направление: </span>
                </div>
                <div className="right">
                    <span>{props?.directionTypeForUser}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Вентиляция: </span>
                </div>
                <div className="right">
                    <span>{props?.hasVentilation ? 'есть' : 'нет'}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Пожарная сигнализация: </span>
                </div>
                <div className="right">
                    <span>{props?.hasFireAlarm ? 'есть' : 'нет'}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Охранная сигнализация: </span>
                </div>
                <div className="right">
                    <span>{props?.hasSecurityAlarm ? 'есть' : 'нет'}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Класс: </span>
                </div>
                <div className="right">
                    <span>{props?.gradeType}</span>
                </div>
            </div>
        </div>
    );
};

export default ForCommercialAd;