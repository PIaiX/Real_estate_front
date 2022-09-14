import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard/lib/Component';
import icons from "../img/chat-actions-sprite.svg"

const MessageDropdownMobile = (props) => {
    const {
        activeMessage,
        resetActiveMessage,
        onChooseMessage,
        onUpdateMessage,
        onDeleteMessage
    } = props

    return (
        <ul className="mobile-item__dropdown">
            <CopyToClipboard text={activeMessage?.text}>
                <li
                    onClick={() => resetActiveMessage()}
                >
                    <svg className="chat-actions-icon"><use xlinkHref={`${icons}#copy-icon`} /></svg>
                    <span>копировать текст</span>
                </li>
            </CopyToClipboard>
            <li
                onClick={() => {
                    onUpdateMessage(activeMessage.id, activeMessage.text)
                    resetActiveMessage()
                }}
            >
                <svg className="chat-actions-icon"><use xlinkHref={`${icons}#edit-icon`} /></svg>
                <span>изменить</span>
            </li>
            <li
                onClick={() => {
                    onDeleteMessage(activeMessage.id)
                    resetActiveMessage()
                }}
            >
                <svg className="chat-actions-icon"><use xlinkHref={`${icons}#trash-icon`} /></svg>
                <span>удалить</span>
            </li>
            <li
                onClick={() => {
                    onChooseMessage()
                    resetActiveMessage()
                }}
            >
                <svg className="chat-actions-icon"><use xlinkHref={`${icons}#choose-icon`} /></svg>
                <span>выбрать</span>
            </li>
        </ul>
    )
}

export default MessageDropdownMobile;