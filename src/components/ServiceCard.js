import React from 'react';
import {NavLink} from "react-router-dom";

const ServiceCard = (props) => {

    return (
        <div className="service-card">
            <div className="title">
                <h4 className="mb-1 mb-xl-2 mb-xxl-0">{props.serviceType}</h4>
            </div>

            <div className="desc mt-2 mt-md-3 mt-xxl-0">
                <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы {props.experienceTypeForUser}</div>
                <div className="text">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                {props.labels.map(label => (
                    <div className="serv" key={label.id}>{label.name}</div>
                ))}
            </div>
            <div className="row justify-content-end">
                <div className="col-sm-8">
                    <div className="row row-cols-2 align-items-center g-2 g-sm-4">
                        <div>
                            <button type="button" className="w-100 fs-12 color-1 d-flex align-items-center">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.785714 12.4444C0.785714 13.3 1.49286 14 2.35714 14H8.64286C9.50714 14 10.2143 13.3 10.2143 12.4444V3.11111H0.785714V12.4444ZM11 0.777778H8.25L7.46429 0H3.53571L2.75 0.777778H0V2.33333H11V0.777778Z" fill="#146492"/>
                                </svg>
                                <span
                                    className="ms-1 ms-sm-2"
                                      onClick={() => {
                                          props.callback && props.callback(props.id)
                                      }}
                                >
                                    Удалить услугу
                                </span>
                            </button>
                        </div>
                        <div>
                            <NavLink to={`create/${props.id}`} className="btn btn-1 fs-12 w-100">Редактировать</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;