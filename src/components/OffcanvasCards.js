import React, {useEffect, useState} from 'react';
import Card from './Card';
import CustomOffcanvas from './CustomOffcanvas';

const OffcanvasCards = (props) => {

    return (
        <CustomOffcanvas
            className={props.className ?? ''}
            placement='start'
            isShow={props?.cards?.length}
            setIsShow={() => props.hideOffcanvas && props.hideOffcanvas()}
            backdrop={false}
            closeButton={true}
        >
            {
                props?.cards?.length && props.cards.map(card => (
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
                            estateName={card?.estate?.name}
                            buildingTypeForUser={card?.buildingTypeForUser}
                            realEstateTypeForUser={card?.estate?.realEstateTypeForUser}
                            acres={card?.acres}
                        />
                    </div>
                ))
            }
        </CustomOffcanvas>
    );
};

export default OffcanvasCards;