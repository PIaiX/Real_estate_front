import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {acceptResponse, completeResponse, rejectResponse} from '../API/responses';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert"
import CustomModal from "./CustomModal";

const ResponseCard = (props) => {

    const axiosPrivate = useAxiosPrivate()
    const token = useSelector(state => state?.accessToken)
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)
    const [isShowModal, setIsShowModal] = useState(false)

    const onAccept = () => {
        props.id && acceptResponse(axiosPrivate, props.id, {token})
            .then(() => {
                props.updateData && props.updateData()
                setAlert('success', true, 'Отклик успешно принят')
            }).catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
    }

    const onReject = () => {
        props.id && rejectResponse(axiosPrivate, props.id, {token})
            .then(() => {
                props.updateData && props.updateData()
                setAlert('success', true, 'Отклик успешно отклонен')
            }).catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
    }

    const onComplete = () => {
        props.id && completeResponse(axiosPrivate, props.id, {token})
            .then(() => {
                props.updateData && props.updateData()
                setAlert('success', true, 'Отклик успешно завершен')
            }).catch(() => {
                setAlert('danger', true, 'Произошла ошибка сервера')
            })
    }

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
        <div
            className={`response-card ${((props.type === 'in') || (props.type === 'work')) ? 'response-card_in' : 'response-card_out'}`}>
            <div className="title">
                <div className="d-xxl-flex">
                    <h4 className="color-1 mb-1 mb-xl-2 mb-xxl-0">
                        <Link to={`/user/${props.userId}`}>
                            {props.userName}
                        </Link>
                    </h4>
                    <div className="rating mb-1 mb-xl-2 ms-xxl-4">
                        <img src="/img/icons/star-blue.svg" alt="1"/>
                        <img src="/img/icons/star-blue.svg" alt="1"/>
                        <img src="/img/icons/star-blue.svg" alt="1"/>
                        <img src="/img/icons/star-gray.svg" alt="1"/>
                        <img src="/img/icons/star-gray.svg" alt="1"/>
                        <span>({props.rating})</span>
                    </div>
                </div>
                <h4 className="mb-1 mb-xl-2 mb-xxl-0">{props.service}</h4>
            </div>
            <div className="photo mt-2 mt-md-3 mt-xxl-0">
                <Link to={`/user/${props.userId}`}>
                    <img src={props.avatar} alt={props.userName}/>
                </Link>
            </div>
            <div className="desc mt-2 mt-md-3 mt-xxl-0">
                {(props.subService) && (
                    <>
                        <button onClick={() => setIsShowModal(true)} className='button-responses'>
                            <h5>{props?.subService?.name}</h5>
                        </button>
                        <CustomModal
                            isShow={isShowModal}
                            setIsShow={setIsShowModal}
                            centered={true}
                            closeButton={true}
                        >
                            <div className='d-flex align-items-center flex-column'>
                                <div><span className='fs-12 fw-bold'>Услуга:</span> {props?.subService?.name}</div>
                                <div><span className='fs-12 fw-bold'>Описание:</span> {props?.serviceDes}</div>
                                {props.description &&
                                    <div><span className='fs-12 fw-bold'>Сообщение отклика:</span> {props?.description}
                                    </div>}
                            </div>
                        </CustomModal>
                    </>
                )}
                {props.description &&
                    <div className="text mt-1">
                        <p><span className='fw-bold'>Сообщение отклика:</span> {props.description}</p>
                    </div>
                }
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
                                className="btn btn-1 w-100 px-2"
                                onClick={() => setSendMessagePayloads()}
                            >
                                Написать сообщение
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