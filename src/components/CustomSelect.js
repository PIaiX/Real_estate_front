import React, {useEffect, useRef, useState} from 'react';
import DefaultDropdown from './DefaultDropdown';

// mode = titles(default) -> если в checkedOptions передаются titles(значения отображаемые в dropdown items)
// mode = values -> если в checkedOptions передаются values(значения которые нужны для вычислений и логики, прикрепляются к dropdown items, но не отображаются в UI)
const CustomSelect = React.memo(({mode = 'titles', options = [], checkedOptions, btnClass, className, title, isShow, modificator, callback, child, placeholder, align}) => {
    const [dropdownItems, setDropdownItems] = useState([])
    const [checkedValues, setCheckedValues] = useState([])
    const [checkedTitles, setCheckedTitles] = useState([])
    const [isShowDropdown, setIsShowDropdown] = useState(isShow || false)
    const [isChangedOptions, setIsChangedOptions] = useState(false)
    const customSelect = useRef(null)
    const DropdownChild = child ?? DefaultDropdown

    const DropdownItem = ({item}) => (
        <label className="radio-line" key={item.value}>
            <input
                type="radio"
                name="type"
                value={item.value}
                onChange={() => onSelectItem(item.title, item.value)}
                checked={checkedValues.includes(item.value)}
            />
            <div>{item.title}</div>
        </label>
    )

    const onSelectCallback = (titles, values) => {
        if (callback) {
            (titles.length === 1 && values.length === 1)
                ? callback({title: titles[0], value: values[0]})
                : callback({titles: titles, values: values})
        }
    }

    const onSelectItem = (title, value) => {
        setCheckedValues(prevValues => prevValues.length && (typeof prevValues[0]) === 'number' ? [+value] : [value])
        setCheckedTitles([title])
        setIsChangedOptions(true)
    }

    const closeDropdown = () => setIsShowDropdown(false)

    const handleClickOutside = (event) => {
        if (customSelect.current && !customSelect.current.contains(event.target)) {
            closeDropdown()
        }
    }

    useEffect(() => {
        if (isChangedOptions) {
            onSelectCallback(checkedTitles, checkedValues)
            setIsChangedOptions(false)
        }

    }, [isChangedOptions])

    useEffect(() => isShow && setIsShowDropdown(isShow), [isShow])

    useEffect(() => {
        options.length && setDropdownItems(options.map((option, index) => option.value ? option : ({
            title: option,
            value: index
        })))
    }, [options])

    useEffect(() => {
        if (dropdownItems.length && checkedOptions && mode === 'titles') {
            const filteredValues = dropdownItems.filter(item => checkedOptions.includes(item.title))
            setCheckedTitles(checkedOptions)
            setCheckedValues(filteredValues.map(item => item.value))
        }
        if (dropdownItems.length && checkedOptions && mode === 'values') {
            const filteredTitles = dropdownItems.filter(item => checkedOptions.includes(item.value))
            setCheckedValues(checkedOptions)
            setCheckedTitles(filteredTitles.map(item => item.title))
        }
    }, [dropdownItems, checkedOptions])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <div
            className={`custom-select ${modificator ? 'custom-select_' + modificator : ''} ${className ?? ''} ${isShowDropdown ? 'show' : ''}`}
            ref={customSelect}
        >
            <button
                type="button"
                className={`custom-select__toggle ${modificator ? 'custom-select__toggle_' + modificator : ''} ${btnClass ? btnClass : ''}`}
                onClick={() => setIsShowDropdown(prevIsShowDropdown => !prevIsShowDropdown)}
            >
                {
                    dropdownItems.length
                        ? <div>{title || (checkedTitles.length === 1 && checkedTitles) || 'Выберите значение'}</div>
                        : <div>Пусто</div>
                }
                <svg className="ms-2" viewBox="0 0 23 12" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961"/>
                    <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)"/>
                </svg>
            </button>
            <div
                className={`dropdown-list ${modificator ? 'dropdown-list_' + modificator : ''} options`}
                data-alignment={align}
            >
                <DropdownChild
                    options={dropdownItems}
                    onSelectItem={onSelectItem}
                    closeDropdown={closeDropdown}
                    checkedValues={checkedValues}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
})

export default CustomSelect;