import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CustomModal from "./CustomModal";
import {checkPhotoPath} from "../helpers/photo";

const CardUserResponse = (props) => {

    const [isShowModal, setIsShowModal] = useState(false)


    return (
        <div
            className='response-card-ad'>
            <div className="title">
                <div className="">
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
            </div>
            <div className="photo mt-2 mt-md-3 mt-xxl-0">
                <Link to={`/user/${props.userId}`}>
                    <img src={checkPhotoPath(props.avatar)} alt={props.userName}/>
                </Link>
            </div>
            <div className="desc mt-2 mt-md-3 mt-xxl-0">
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
                        <div><span className='fs-12 fw-bold'>Описание услуги:</span> {props?.serviceDes}</div>
                        {
                            props.description &&
                            <div>
                                <span className='fs-12 fw-bold'>Комментарий отклика:</span> {props?.description}
                            </div>
                        }
                        <div>
                            <span className='fs-12 fw-bold'>Примеры работ:</span>
                            <div>

                            </div>
                        </div>
                    </div>
                </CustomModal>
                {
                    props.description
                        ?
                        <div className="text mt-1">
                            <p><span className='fw-bold'>Комментарий отклика:</span> {props.description}</p>
                        </div>
                        :
                        <div className='text mt-1'/>
                }
            </div>
        </div>
    );
};

export default CardUserResponse;