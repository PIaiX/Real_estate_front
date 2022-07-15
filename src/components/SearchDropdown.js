import React, {useEffect, useRef, useState} from 'react'
import debounce from '../hooks/debounce';
import DefaultDropdown from './DefaultDropdown';

const SearchDropdown = ({initialCount, isShow, options, onSelectItem, closeDropdown, checkedValues, placeholder}) => {
    const [optionsSearch, setOptionsSearch] = useState('')
    const debouncedOptionsSearch = debounce(optionsSearch, 300)
    const [foundOptions, setFoundOptions] = useState([])
    const inputRef = useRef()

    // scroll
    const [listItems, setListItems] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [total, setTotal] = useState(+initialCount);

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

    useEffect(() => {
        if (isShow) {
            setOptionsSearch('')
            setTotal(initialCount + initialCount)
            setListItems(options.slice(0, initialCount))
        }
    }, [isShow])

    useEffect(() => options.length && fetchData(), [options]);
    useEffect(() => isFetching && fetchData(), [isFetching]);

    const onScrollList = (event) => {
        const scrollBottom = event.target.scrollTop + event.target.offsetHeight + 100 >= event.target.scrollHeight;

        if (!debouncedOptionsSearch && scrollBottom) {
            setIsFetching(true);
        }
    }

    const fetchData = async () => {
        setTimeout(async () => {
            const result = options.slice(listItems.length, total)
            setTotal(total + 100)
            setListItems(prevListItems => [...prevListItems, ...result])
            setIsFetching(false);
        }, 1000);
    };

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
                options={debouncedOptionsSearch ? foundOptions : listItems}
                onSelectItem={onSelectItem}
                closeDropdown={closeDropdown}
                checkedValues={checkedValues}
                onScroll={onScrollList}
                isFetching={isFetching}
                isShow={isShow}
            />
        </>
    )
}

export default SearchDropdown