import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import ShowPhone from './ShowPhone';
import Rating from "react-rating";
import {checkPhotoPath} from "../helpers/photo";

function UserCard(props) {

    const setSendMessagePayloads = () => {
        if (props?.setSendMessagePayloads && props?.serviceId && props?.userId) {
            props.setSendMessagePayloads(prev => ({
                ...prev,
                serviceId: props?.serviceId,
                userId: props?.userId
            }))
        }
    }

    return (
        <div className="user-card">
            <div className="title">
                <div className="d-xxl-flex">
                    <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                        <Link
                            to={props.link}
                        >
                            {props.userName}
                        </Link>
                    </h4>
                    <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                        <Rating
                            readonly={true}
                            initialRating={props?.rating}
                            fractions={2}
                            emptySymbol={<img src="/img/icons/star-gray.svg"
                                              alt="1"/>}
                            fullSymbol={<img src="/img/icons/star-blue.svg"
                                             alt="1"/>}
                        />
                        <span>({props.rating})</span>
                    </div>
                </div>
                <h4 className="mb-1 mb-xl-2 mb-xxl-0">{props.service}</h4>
            </div>
            <div className="photo mt-2 mt-md-3 mt-xxl-0">
                <Link to={props.link}>
                    <img src={checkPhotoPath(props.photo)} alt={props.userName}/>
                </Link>
            </div>
            <div className="desc mt-2 mt-md-3 mt-xxl-0">
                <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">Опыт работы {props.exp}</div>
                <div className="text">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                {props?.labels?.map(i => (
                    <div className="serv" key={i.id}>{i.name}</div>
                ))}
            </div>
            <div className="btns mt-2 mt-md-3 mt-xxl-0">
                <ShowPhone phone={props.phone}/>
                {props?.isShowMessage &&
                    <button
                    type="button"
                    className="d-xxl-block btn btn-1 w-100 px-2 mt-2"
                    onClick={() => setSendMessagePayloads()}
                >
                    Написать сообщение
                </button>}
                {props.inAddResponse && <Link
                    to={`/personal-account/responses/add/${props.userId}`}
                    className="btn btn-2 w-100 px-3 mt-2 mt-xxl-0"
                    state={{
                        labels: props.labels,
                        exp: props.exp,
                        service: props.service,
                        phone: props.phone,
                        description: props.description,
                        serviceId: props.serviceId,
                        prevUrl: props.prevUrl
                    }}
                >
                    Откликнуться
                </Link>}
            </div>
        </div>
    );
}

export default UserCard;