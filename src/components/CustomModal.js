import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";

const CustomModal = (props) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    useEffect(() => {
        setShow(props.isShow)
    }, [props.isShow])

    return (
        <Modal
            bsPrefix={props?.bsPrefix}
            show={show}
            onHide={handleClose}
            backdrop={props?.backdrop || true}
            data-bs-backdrop={false}
            centered={props?.centre || props?.centered || false}
            dialogClassName="modal-90w"
        >
            <Modal.Header>
                {props?.closeButton ?
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
                    :
                    null
                }
            </Modal.Header>
            <Modal.Body>
                {props?.children}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;