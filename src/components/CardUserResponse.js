import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import CustomModal from "./CustomModal";
import {checkPhotoPath} from "../helpers/photo";
import {EffectFade, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ImageViewer from "react-simple-image-viewer";
import Rating from "react-rating";

const CardUserResponse = (props) => {

    const [isShowModal, setIsShowModal] = useState(false)
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const convertPhoto = (photo) => {
        const url = 'https://api.antontig.beget.tech'
        return photo.map(i => i.image).map(i => `${url}${i}`)
    }

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
                    size='lg'
                >
                    <div className="d-flex align-items-center mb-3">
                        <div className="photo me-2 me-sm-4">
                            <img src={checkPhotoPath(props?.avatar)} alt={props?.userName}/>
                        </div>
                        <div>
                            <h4>{props?.userName}</h4>
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
                            <span>({props.rating})</span>
                        </div>

                    </div>
                    <div className='row g-3'>
                        <div className="col-lg-4">
                            <span className='fs-12 fw-bold'>Услуга:</span>
                        </div>
                        <div className="col-lg-8">
                            {props?.subService?.name}
                        </div>
                        <div className="col-lg-4">
                            <span className='fs-12 fw-bold'>Описание услуги:</span>
                        </div>
                        <div className="col-lg-8">
                            {props?.serviceDes}
                        </div>
                        {
                            props.description &&
                            <>
                                <div className="col-lg-4">
                                    <span className='fs-12 fw-bold'>Комментарий отклика:</span>
                                </div>
                                <div className="col-lg-8">
                                    {props?.description}
                                </div>
                            </>
                        }
                        {
                            props?.images?.length > 0 &&
                            <>
                                <div className="col-lg-4">
                                    <span className='fs-12 fw-bold'>Примеры работ:</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row row-cols-5 g-2">
                                        {props?.images?.map((i, index) => (
                                            <div key={i.id}>
                                                <img
                                                    onClick={() => openImageViewer(index)}
                                                    className="work-example"
                                                    src={`https://api.antontig.beget.tech${i.image}`}
                                                />
                                            </div>
                                        ))}
                                        {isViewerOpen && (
                                            <ImageViewer
                                                src={convertPhoto(props?.images)}
                                                currentIndex={currentImage}
                                                disableScroll={false}
                                                closeOnClickOutside={true}
                                                onClose={closeImageViewer}
                                            />
                                        )}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {/*<div className='d-flex align-items-center flex-column'>*/}
                    {/*    <div className='slider-in-responses'>*/}
                    {/*        <div className='d-flex flex-column align-items-center'>*/}
                    {/*        </div>*/}
                    {/*        <div className='swiper-responses'>*/}
                    {/*            <Swiper*/}
                    {/*                className="w-100 overflow-hidden mx-3"*/}
                    {/*                modules={[Thumbs, EffectFade]}*/}
                    {/*                thumbs={{swiper: thumbsSwiper}}*/}
                    {/*                slidesPerView={1}*/}
                    {/*                navigation={{*/}
                    {/*                    nextEl: '.swiper-button-next',*/}
                    {/*                    prevEl: '.swiper-button-prev',*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                {props?.images?.map(i => (*/}
                    {/*                    <SwiperSlide key={i.id}>*/}
                    {/*                            <img*/}
                    {/*                                className="main-slider-img"*/}
                    {/*                                src={`https://api.antontig.beget.tech${i.image}`}*/}
                    {/*                            />*/}
                    {/*                    </SwiperSlide>*/}
                    {/*                ))}*/}
                    {/*                <div className="swiper-button-prev">*/}
                    {/*                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                        <line y1="-2" x2="30.9413" y2="-2"*/}
                    {/*                              transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 23.4434 43.4565)"/>*/}
                    {/*                        <line y1="-2" x2="30.9413" y2="-2"*/}
                    {/*                              transform="matrix(-0.660679 0.750669 0.709114 0.705094 23.4424 3)"/>*/}
                    {/*                    </svg>*/}
                    {/*                </div>*/}
                    {/*                <div className="swiper-button-next">*/}
                    {/*                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                        <line y1="-2" x2="30.9413" y2="-2"*/}
                    {/*                              transform="matrix(0.660679 0.750669 -0.709114 0.705094 0 3)"/>*/}
                    {/*                        <line y1="-2" x2="30.9413" y2="-2"*/}
                    {/*                              transform="matrix(0.660679 -0.750669 -0.709114 -0.705094 0.000976562 43.4565)"/>*/}
                    {/*                    </svg>*/}
                    {/*                </div>*/}
                    {/*            </Swiper>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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