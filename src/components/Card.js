import React from 'react';
import BtnFav from '../utilities/BtnFav';


export default function Card(props) {
    const type = props.type;
    if(type == 'tiled') {
        return (
            <div className="card-mini">
                <img src={props.url} alt={props.title} className="photo"/>
                <div className="p-3">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="color-1 title-font fw-7 fs-11">{props.title}</div>
                        <div className="title-font black fw-7 fs-11">{props.price}</div>
                    </div>
                    <div className="address d-flex align-items-start mb-3">
                        <img src="/real_estate/img/icons/pin.svg" alt="адрес"/>
                        <div className="fs-09 ms-2">
                            <div className="mb-1">{props.addressName}</div>
                            <div>{props.address}</div>
                        </div>
                    </div>
                    <div className="text mb-4">
                        {props.text}
                    </div>
                    <div className="text-end color-2 fs-09 fw-3">
                        {props.date}
                    </div>
                </div>
                <div className="labels">
                    <div className="vip">
                        <img src="/real_estate/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>
                    <div className="hot">
                        <img src="/real_estate/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>
                </div>
                <BtnFav />
            </div>
        )
    }
    else {
        return (
            <div className="card-midi">
                <div className="row">
                    <div className="col-4">
                        <img src={props.url} alt={props.title} className="photo"/>
                    </div>
                    <div className="col-5">
                        <div className="color-1 title-font fw-7 fs-15">{props.title}</div>

                        <div className="address d-flex align-items-start mb-3">
                            <img src="/real_estate/img/icons/pin.svg" alt="адрес"/>
                            <div className="fs-09 ms-2">
                                <div className="mb-1">{props.addressName}</div>
                                <div>{props.address}</div>
                            </div>
                        </div>
                        <div className="text mb-4">
                            {props.text}
                        </div>
                        <div className="d-flex color-2 fs-09 fw-3">
                            <BtnFav />
                            <div>{props.date}</div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="title-font black fw-7 fs-15">{props.price}</div>
                    </div>
                </div>
            
                <div className="labels">
                    <div className="vip">
                        <img src="/real_estate/img/icons/vip.svg" alt="vip"/>
                        <span>VIP</span>
                    </div>
                    <div className="hot">
                        <img src="/real_estate/img/icons/hot.svg" alt="hot"/>
                        <span>Hot</span>
                    </div>
                </div>
                
            </div>
        )
    }
    
}
