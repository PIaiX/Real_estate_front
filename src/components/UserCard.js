import React from 'react';
import {Link} from 'react-router-dom';
import ShowPhone from './ShowPhone';
import {animateScroll as scroll} from 'react-scroll';
import Rating from "react-rating";

function UserCard(props) {

    return (
        <div className="user-card">
            <div className="title">
                <div className="d-xxl-flex">
                    <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                        <Link
                            to={props.link}
                            state={props.linkState}
                            onClick={props.linkClick}
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
                    <img src={props.avatar ? `https://api.antontig.beget.tech/uploads/${props.avatar}` : '/img/nophoto.jpg'} alt={props.userName}/>
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
                <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-xxl-block btn btn-1 w-100 px-2">Написать сообщение</button>
                <Link
                    to={`/personal-account/responses/add/${props.id}`}
                    className="btn btn-2 w-100 px-3 mt-2 mt-xxl-0"
                >
                    Откликнуться
                </Link>
            </div>
        </div>
    );
}

export default UserCard;