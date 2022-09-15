import React from 'react';
import {Modal} from "react-bootstrap";

const CustomModal = (props) => {

    const handleClose = () => props?.setIsShow(false)

    return (
        <Modal
            bsPrefix={props?.bsPrefix}
            show={props?.isShow}
            onHide={() => {
                props.hideModal
                    ? props.hideModal()
                    : handleClose()
            }}
            backdrop={props?.backdrop || true}
            data-bs-backdrop={false}
            centered={props?.centre || props?.centered || false}
            dialogClassName="modal-90w"
            className={props?.className ?? ''}
            size={props.size}
        >
            {props?.closeButton ?
                <Modal.Header>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            props.hideModal
                                ? props.hideModal()
                                : handleClose()
                        }}
                    >

                        <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 1.18237L15 15.9049"/>
                            <path d="M14.9999 1.18237L1.00001 15.9049"/>
                        </svg>
                    </button>
                </Modal.Header>
                :
                null
            }
            <Modal.Body>
                {props?.children}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;