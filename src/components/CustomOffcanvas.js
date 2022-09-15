import React from 'react';
import {Offcanvas} from 'react-bootstrap';

const CustomOffcanvas = ({isShow, setIsShow, className, placement, scroll, backdrop, closeButton, enforceFocus, children}) => {

    const handleClose = () => setIsShow()

    return (
        <Offcanvas
            className={className}
            placement={placement}
            show={isShow}
            onHide={handleClose}
            scroll={scroll}
            backdrop={backdrop}
            data-bs-backdrop={backdrop}
            enforceFocus={enforceFocus}
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