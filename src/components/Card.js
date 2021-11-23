import React from 'react';
import BtnFav from '../utilities/BtnFav';


export default function Card(props) {
    return (
        <div className="card-mini">
            <img src={props.url} alt={props.title} className="w-100"/>
            <div className="p-3">
                <div className="d-flex justify-content-between mb-3">
                    <div className="color-1 title-font fw-7 fs-11">{props.title}</div>
                    <div className="title-font black fw-7 fs-11">{props.price}</div>
                </div>
                <div className="d-flex align-items-start mb-3">
                    <img src="../img/icons/pin.svg" alt="адрес"/>
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
                    <img src="../img/icons/vip.svg" alt="vip"/>
                    <span>VIP</span>
                </div>
                <div className="hot">
                    <img src="../img/icons/hot.svg" alt="hot"/>
                    <span>Hot</span>
                </div>
            </div>
            <BtnFav />
        </div>
    )
}
