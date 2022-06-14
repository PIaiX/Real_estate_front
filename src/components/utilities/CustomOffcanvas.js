import React, {useEffect, useState} from 'react';
import {Offcanvas} from 'react-bootstrap';

const CustomOffcanvas = ({isShow, setIsShow, bsPrefix, placement, scroll, backdrop, closeButton, children, ...props}) => {

    const handleClose = () => setIsShow(false)

    return (
        <Offcanvas
            bsPrefix={bsPrefix ? `offcanvas ${bsPrefix}` : 'offcanvas'}
            placement={placement}
            show={isShow}
            onHide={handleClose}
            scroll={scroll}
            backdrop={backdrop}
            data-bs-backdrop={false}
            {...props}
        >
            {
                closeButton
                    ? <Offcanvas.Header>
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
                    : null
            }
            <Offcanvas.Body>
                {children}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CustomOffcanvas;