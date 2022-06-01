import React, {useEffect, useState} from 'react';
import {Offcanvas} from 'react-bootstrap';
import Card from '../Card';

const CatalogOffcanvasCards = ({cards, ...props}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        if (cards.length) {
            handleShow()
        }
    }, [cards])

    return (
        <Offcanvas
            bsPrefix='offcanvas offcanvas-cards'
            placement='start'
            show={show}
            onHide={handleClose}
            backdrop={false}
            data-bs-backdrop="false"
            {...props}
        >
            <Offcanvas.Header>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                >
                    <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00006 1.18237L15 15.9049"/>
                        <path d="M14.9999 1.18237L1.00001 15.9049"/>
                    </svg>
                </button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cards.map(card => (
                        <div key={card.id}>
                            <Card
                                className='mb-4'
                                pictures={[card.image, card.images]}
                                isVip={card.isVip}
                                isHot={card.isHot}
                                title={card.title}
                                price={card.price}
                                transactionType={card.transactionType}
                                addressName={card.residentComplexForUser}
                                address={card.address}
                                metro={card.metro}
                                text={card.description}
                                date={card.createdAtForUser}
                                id={card.id}
                                uuid={card.uuid}
                                user={card.user}
                                communalPrice={card.communalPrice}
                                pledge={card.pledge}
                                commissionForUser={card.commissionForUser}
                                prepaymentTypeForUser={card.prepaymentTypeForUser}
                                rentalTypeForUser={card.rentalTypeForUser}
                                wishlistStatus={card.wishlistStatus}
                                userAvatar={card.user?.avatar}

                            />
                        </div>
                    ))
                }
            </Offcanvas.Body>
        </Offcanvas>
        // <>
        //     <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
        //             data-bs-target="#offcanvasExample"
        //             aria-controls="offcanvasExample">
        //         Button with data-bs-target
        //     </button>
        //     <div className="offcanvas offcanvas-start" data-bs-backdrop="false" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        //         <div className="offcanvas-header">
        //             <button
        //                 type="button"
        //                 className="btn-close"
        //                 onClick={handleClose}
        //             >
        //                 <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M1.00006 1.18237L15 15.9049"/>
        //                     <path d="M14.9999 1.18237L1.00001 15.9049"/>
        //                 </svg>
        //             </button>
        //         </div>
        //         <div className="offcanvas-body">
        //             {
        //                 cards.map(card => (
        //                     <div key={card.id}>
        //                         <Card
        //                             className='mb-4'
        //                             pictures={[card.image, card.images]}
        //                             isVip={card.isVip}
        //                             isHot={card.isHot}
        //                             title={card.title}
        //                             price={card.price}
        //                             transactionType={card.transactionType}
        //                             addressName={card.residentComplexForUser}
        //                             address={card.address}
        //                             metro={card.metro}
        //                             text={card.description}
        //                             date={card.createdAtForUser}
        //                             id={card.id}
        //                             uuid={card.uuid}
        //                             user={card.user}
        //                             communalPrice={card.communalPrice}
        //                             pledge={card.pledge}
        //                             commissionForUser={card.commissionForUser}
        //                             prepaymentTypeForUser={card.prepaymentTypeForUser}
        //                             rentalTypeForUser={card.rentalTypeForUser}
        //                             wishlistStatus={card.wishlistStatus}
        //                             userAvatar={card.user?.avatar}
        //
        //                         />
        //                     </div>
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </>
    );
};

export default CatalogOffcanvasCards;