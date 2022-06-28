import React, {useEffect, useState} from 'react'
import useDebounce from '../hooks/useDebounce';
import DefaultDropdown from './DefaultDropdown';

const SearchDropdown = ({options, onSelectItem, closeDropdown, checkedValues, placeholder}) => {
    const [optionsSearch, setOptionsSearch] = useState('')
    const debouncedOptionsSearch = useDebounce(optionsSearch, 300)
    const [foundOptions, setFoundOptions] = useState([])

    useEffect(() => {
        const value = debouncedOptionsSearch.toLowerCase().trim()

        const result = options && options.filter(option => !debouncedOptionsSearch || option.title.toLowerCase().startsWith(value))
        setFoundOptions(result)
    }, [options, debouncedOptionsSearch])

    return (
        <>
            <form>
                <input
                    className="dropdown-list__search"
                    autoFocus
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => setOptionsSearch(e.target.value)}
                    value={optionsSearch}
                />
            </form>
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