import React from 'react';

const ForAboutBuildingLivingAd = (props) => {
    return (
        <div className="column-2">
            <div className="specification fs-11">
                <div className="left">
                    <span>Тип дома: </span>
                </div>
                <div className="right">
                    <span>{props?.houseBuildingTypeForUser}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Лифт: </span>
                </div>
                <div className="right">
                    <span>{props?.elevatorTypeForUser}</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Год постройки: </span>
                </div>
                <div className="right">
                    <span>{props?.yearOfConstructionForUser} г.</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Высота потолков: </span>
                </div>
                <div className="right">
                    <span>{props?.ceilingHeightForUser} м</span>
                </div>
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Пандус: </span>
                </div>
                {props?.hasRamp ?
                    <div className="right">
                        <span>Есть</span>
                    </div>
                    :
                    <div className="right">
                        <span>Нет</span>
                    </div>
                }
            </div>
            <div className="specification fs-11">
                <div className="left">
                    <span>Мусоропровод: </span>
                </div>
                <div className="right">
                    {props?.hasGarbage ? <span>Да</span> : <span>Нет</span>}
                </div>
            </div>
            <div className="fs-11 mt-3 d-flex flex-row justify-content-between flex-wrap">
                <div className="left">
                    <span>Парковка: </span>
                </div>
                <div className='d-flex flex-column align-items-end flex-wrap'>
                    {props?.hasGroundParking ?
                        <div className="right">
                            <span>наземная</span>
                        </div>
                        :
                        ''}
                    {props?.hasMoreLayerParking ?
                        <div className="right">
                            <span>многоуровневая</span>
                        </div>
                        :
                        ''
                    }
                    {props?.hasUnderGroundParking ?
                        <div className="right">
                            <span>подземная</span>
                        </div>
                        :
                        ''
                    }
                    {props?.hasYardParking ?
                        <div className="right">
                            <span>открытая во дворе</span>
                        </div>
                        :
                        ''
                    }
                    {props?.hasBarrierParking ?
                        <div className="right">
                            <span>во дворе за шлагбаумом</span>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
};

export default ForAboutBuildingLivingAd;