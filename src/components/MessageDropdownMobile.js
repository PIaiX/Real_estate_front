import React, {useCallback, useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard/lib/Component';
import {HandySvg} from 'handy-svg';
import copy from '../img/icons/copy.svg';
import edit from '../img/icons/edit.svg';
import trash from '../img/icons/trash.svg';
import choose from '../img/icons/choose.svg';

const MessageDropdownMobile = ({isShow, resetActiveMessage, messagesScrollHeight, messagesScrollTop, messagesClientHeight, messagesClientWidth, messagePosition}) => {
    const [computedPosition, setComputedPosition] = useState({x: -1000, y: -1000})
    const [isNotEnoughSpace, setIsNotEnoughSpace] = useState(false)
    const dropdownRef = useCallback(node => {
        if (node !== null) {
            const rect = node.getBoundingClientRect()
            const dropdownClientHeight = rect.height

            if ((messagesClientHeight - messagePosition.y) < dropdownClientHeight) {
                setIsNotEnoughSpace(true)
            } else {
                setIsNotEnoughSpace(false)
            }
        }
    }, [messagesScrollHeight, messagesScrollTop, messagesClientHeight, messagePosition])

    useEffect(() => {
        setComputedPosition({
            x: messagePosition.x - ((window.innerWidth - messagesClientWidth) / 2),
            y: isNotEnoughSpace
                ? messagesClientHeight - (messagesScrollTop + messagePosition.y)
                : messagesScrollTop + messagePosition.y
        })
    }, [messagesScrollHeight, messagesScrollTop, messagesClientHeight, messagesClientWidth, messagePosition, isNotEnoughSpace])

    // first mounting reset
    useEffect(() => resetActiveMessage(), [])

    return (
        <ul
            style={{top: isNotEnoughSpace ? 'unset' : computedPosition.y, bottom: isNotEnoughSpace ? computedPosition.y : 'unset', left: computedPosition.x, display: isShow ? 'flex' : 'none'}}
            className="mobile-item__dropdown"
            ref={dropdownRef}
        >
            <CopyToClipboard>
                <li onClick={() => resetActiveMessage()}>
                    <HandySvg
                        src={copy}
                        width="24"
                        height="24"
                        className="copy-icon"
                    />
                    <span>копировать текст</span>
                </li>
            </CopyToClipboard>
            <li
                onClick={() => {
                    // setEditableMessageId(id)
                    // setMessageInput(children)
                    resetActiveMessage()
                }}
            >
                <HandySvg
                    src={edit}
                    width="24"
                    height="24"
                    className="edit-icon"
                />
                <span>изменить</span>
            </li>
            <li>
                <HandySvg
                    src={trash}
                    width="24"
                    height="24"
                    className="trash-icon"
                />
                <span>удалить</span>
            </li>
            <li
                onClick={() => {
                    // setActiveMessageOnMobile(prev => !prev?.length && setSelectedMessagesOnMobile([id]))
                    resetActiveMessage()
                }}
            >
                <HandySvg
                    src={choose}
                    width="24"
                    height="24"
                    className="choose-icon"
                />
                <span>выбрать</span>
            </li>
        </ul>
    )
}

export default MessageDropdownMobile;