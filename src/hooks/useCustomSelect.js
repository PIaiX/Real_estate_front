import {useEffect, useRef, useState} from 'react';

const useCustomSelect = (isShow) => {
    const [isShowDropdown, setIsShowDropdown] = useState(isShow || false)
    const ref = useRef(null)

    const openDropdown = () => setIsShowDropdown(true)
    const closeDropdown = () => setIsShowDropdown(false)
    const toggleDropdown = () => setIsShowDropdown(prevIsShowDropdown => !prevIsShowDropdown)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            closeDropdown()
        }
    }

    useEffect(() => isShow && setIsShowDropdown(isShow), [isShow])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return {
        isShowDropdown,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        ref
    }
}

export default useCustomSelect;