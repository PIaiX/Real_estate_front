import React, {useCallback, useEffect, useState} from 'react';

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

            setDropdownClientWidth(rect.width)
            setDropdownClientHeight(rect.height)
        }
    }, [isShow])

    useEffect(() => {
        // ! needed to compute right
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
            {children}
        </div>
    );
};

export default AdaptiveDropdown;