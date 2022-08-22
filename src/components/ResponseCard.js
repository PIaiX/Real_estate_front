import React from 'react';
import {Link} from 'react-router-dom';
import {acceptResponse, completeResponse, rejectResponse} from '../API/responses';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import Rating from 'react-rating';

const ResponseCard = (props) => {
    const axiosPrivate = useAxiosPrivate()
    const token = useSelector(state => state?.accessToken)

    const onAccept = () => {
        props.id && acceptResponse(axiosPrivate, props.id, {token})
            .then(() => props.updateData && props.updateData())
    }

    const onReject = () => {
        props.id && rejectResponse(axiosPrivate, props.id, {token})
            .then(() => props.updateData && props.updateData())
    }

    const onComplete = () => {
        props.id && completeResponse(axiosPrivate, props.id, {token})
            .then(() => props.updateData && props.updateData())
    }

    return (
        <div className={`response-card ${((props.type === 'in') || (props.type === 'work')) ? 'response-card_in' : 'response-card_out'}`}>
            <div className="title">
                <div className="d-xxl-flex">
                    <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                        <Link to="/">
                            {props.userName}
                        </Link>
                    </h4>
                    <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                        <Rating
                            start="0"
                            stop="5"
                            readonly={true}
                            initialRating={props?.rating}
                            fractions={2}
                            emptySymbol={<img src="/img/icons/star-gray.svg"
                                              alt="1"/>}
                            fullSymbol={<img src="/img/icons/star-blue.svg" alt="1"/>}
                        />
                    </div>
                </div>
                <h4 className="mb-1 mb-xl-2 mb-xxl-0">{props.service}</h4>
            </div>
            <div className="photo mt-2 mt-md-3 mt-xxl-0">
                <Link to="/">
                    <img src={props.avatar} alt={props.userName}/>
                </Link>
            </div>
            <div className="desc mt-2 mt-md-3 mt-xxl-0">
                {(props.experience) && (
                    <h6 className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">
                        Опыт работы {props.experience}
                    </h6>
                )}
                {(props.price && props.priceType) && (
                    <div className="fs-11 gray-2 mb-1 mb-md-2 mb-xxl-3">
                        {`${props.price} ₽ ${props.priceType}`}
                    </div>
                )}
                <div className="text">
                    {props.description && <p>{props.description}</p>}
                </div>
            </div>
            {props.type && (
                <div className={`btns mt-2 mt-md-3 mt-xxl-0`}>
                    {(props.type === 'in') && (
                        <>
                            <button
                                type="button"
                                className="btn btn-1 w-100 px-2"
                                onClick={onAccept}
                            >
                                Принять
                            </button>
                            <button
                                type="button"
                                className="btn btn-2 w-100 px-2"
                                onClick={onReject}
                            >
                                Отклонить
                            </button>
                        </>
                    )}
                    {(props.type === 'out') && (
                        <button
                            type="button"
                            className="btn btn-2 w-100 px-2"
                            onClick={onReject}
                        >
                            Отменить
                        </button>)}
                    {(props.type === 'work') && (
                        <>
                            <button
                                type="button"
                                className="btn btn-1 w-100 px-2"
                                onClick={onComplete}
                            >
                                Выполнить
                            </button>
                            <button
                                type="button"
                                className="btn btn-2 w-100 px-2"
                                onClick={onReject}
                            >
                                Отменить
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResponseCard;