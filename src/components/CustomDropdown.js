import React, {useEffect, useState} from 'react';

const CustomDropdown = ({options, checkedIndex, isSearch, visible, handleChange, alignment}) => {
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
        <div className={`options py-2 ${visible ? '' : 'd-none'} ${isSearch ? 'searched' : ''}`} data-alignment={alignment}>
            {isSearch &&
                <>
                    <input
                        className='custom-select__search'
                        type="text"
                        value={optionsSearch}
                        onChange={e => setOptionsSearch(e.target.value)}
                        placeholder='Введите ваш город'
                    />
                    {filteredOptions?.map(option => (
                        <label className="radio-line" key={option.index}>
                            <input
                                type="radio"
                                name="type"
                                value={option.value}
                                onChange={e => handleChange(e, option.index)}
                                checked={option.index === checkedIndex}
                            />
                            <div>{option.value}</div>
                        </label>
                    ))}
                </>
            }
            {!isSearch && options?.map(option => (
                <label className="radio-line" key={option.index}>
                    <input
                        type="radio"
                        name="type"
                        value={option.value}
                        onChange={e => handleChange(e, option.index)}
                        checked={option.index === checkedIndex}
                    />
                    <div>{option.value}</div>
                </label>
            ))}
        </div>
    );
};

export default CustomDropdown;