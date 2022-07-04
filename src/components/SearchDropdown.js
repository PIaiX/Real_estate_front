import React, {useEffect, useRef, useState} from 'react'
import useDebounce from '../hooks/useDebounce';
import DefaultDropdown from './DefaultDropdown';

const SearchDropdown = ({isShow, options, onSelectItem, closeDropdown, checkedValues, placeholder}) => {
    const [optionsSearch, setOptionsSearch] = useState('')
    const debouncedOptionsSearch = useDebounce(optionsSearch, 300)
    const [foundOptions, setFoundOptions] = useState([])
    const inputRef = useRef()

    useEffect(() => {
        const value = debouncedOptionsSearch.toLowerCase().trim()

        const result = options && options.filter(option => !debouncedOptionsSearch || option.title.toLowerCase().startsWith(value))
        setFoundOptions(result)
    }, [options, debouncedOptionsSearch])

    useEffect(() => {
        inputRef && (isShow
            ? inputRef.current.focus()
            : inputRef.current.blur()
        )
    }, [isShow, inputRef])

    return (
        <>
            <input
                ref={inputRef}
                className="dropdown-list__search"
                type="text"
                placeholder={placeholder}
                onChange={(e) => setOptionsSearch(e.target.value)}
                value={optionsSearch}
            />
            <DefaultDropdown
                options={foundOptions}
                onSelectItem={onSelectItem}
                closeDropdown={closeDropdown}
                checkedValues={checkedValues}
            />
        </>
    )
}

export default SearchDropdown