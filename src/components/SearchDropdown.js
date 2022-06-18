import React, {useEffect, useState} from 'react'
import DefaultDropdown from './DefaultDropdown';

const SearchDropdown = ({options, checkedIndex, handleChange, alignment}) => {
    const [optionsSearch, setOptionsSearch] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])

    useEffect(() => {
        if (options && !optionsSearch) {
            setFilteredOptions(options)
        } else if (options && optionsSearch) {
            const value = optionsSearch.trim().toLowerCase()

            setFilteredOptions(options.filter(item => item.value.toLowerCase().startsWith(value)))
        }
    }, [options, optionsSearch])

    return (
        <div className="search-dropdown">
            <input
                className='custom-select__search'
                type="text"
                value={optionsSearch}
                onChange={e => setOptionsSearch(e.target.value)}
                placeholder='Введите ваш город'
            />
            <DefaultDropdown 
                options={filteredOptions}
                checkedIndex={checkedIndex}
                handleChange={handleChange}
            />
        </div>
    )
}

export default SearchDropdown