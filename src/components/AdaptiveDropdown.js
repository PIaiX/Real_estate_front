import React, {useCallback, useEffect, useState} from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {HandySvg} from "handy-svg";
import copy from "../img/icons/copy.svg";
import edit from "../img/icons/edit.svg";
import trash from "../img/icons/trash.svg";
import choose from "../img/icons/choose.svg";

const AdaptiveDropdown = (props) => {
    // children - node (pass dropdown menu template here)
    // isShow - boolean (dropdown menu visibility state)
    // position - object {x: number, y: number}
    const {children, isShow, position} = props

    // parent node params
    const [parentClientWidth, setParentClientWidth] = useState(null)
    const [parentClientHeight, setParentClientHeight] = useState(null)
    const [parentScrollHeight, setParentScrollHeight] = useState(null)
    const [parentScrollTop, setParentScrollTop] = useState(null)

    // dropdown params
    const [computedDropdownPosition, setComputedDropdownPosition] = useState({x: 0, y: 0})
    const [dropdownClientWidth, setDropdownClientWidth] = useState(null)
    const [dropdownClientHeight, setDropdownClientHeight] = useState(null)
    const [isNotEnoughSpace, setIsNotEnoughSpace] = useState(false)

    //  determination of initial params
    const ref = useCallback(node => {
        if (node !== null) {
            const parentNode = node.parentElement
            const rect = node.getBoundingClientRect()

            if (parentNode) {
                const parentRect = parentNode.getBoundingClientRect()

                setParentClientWidth(parentRect.width)
                setParentClientHeight(parentRect.height)
                setParentScrollHeight(parentNode.scrollHeight)
                setParentScrollTop(parentNode.scrollTop)
            }

            console.log('rect', rect)

            setDropdownClientWidth(rect.width)
            setDropdownClientHeight(rect.height)
        }
    }, [isShow])

    useEffect(() => {
        if (parentClientHeight && position && dropdownClientHeight) {
            ((parentClientHeight - position.y) < dropdownClientHeight)
                ? setIsNotEnoughSpace(true)
                : setIsNotEnoughSpace(false)
        }
    }, [parentClientHeight, position, dropdownClientHeight])

    useEffect(() => {
        setComputedDropdownPosition({
            x: position.x - ((window.innerWidth - parentClientWidth) / 2),
            y: isNotEnoughSpace
                ? parentClientHeight - position.y
                : position.y
        })
    }, [isNotEnoughSpace, parentClientHeight, parentClientWidth, position])

    useEffect(() => {
        console.log('bool', isNotEnoughSpace)
    }, [isNotEnoughSpace])

    return (
        <div
            ref={ref}
            style={{
                display: isShow ? 'block' : 'none',
                position: 'absolute',
                zIndex: 100,
                width: 'fitContent',
                height: 'fitContent',
                top: isNotEnoughSpace ? 'unset' : computedDropdownPosition.y,
                bottom: isNotEnoughSpace ? computedDropdownPosition.y : 'unset',
                left: computedDropdownPosition.x,
            }}
        >
            {/*{children}*/}
            <ul
                style={{
                    // top: isNotEnoughSpace ? 'unset' : computedPosition.y,
                    // bottom: isNotEnoughSpace ? computedPosition.y : 'unset',
                    // left: computedPosition.x,
                    // display: isShow ? 'flex' : 'none'
                }}
                className="mobile-item__dropdown"
                // ref={dropdownRef}
            >
                <CopyToClipboard>
                    <li
                        // onClick={() => resetActiveMessage()}
                    >
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
                        // resetActiveMessage()
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
                        // resetActiveMessage()
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
        </div>
    );
};

export default AdaptiveDropdown;