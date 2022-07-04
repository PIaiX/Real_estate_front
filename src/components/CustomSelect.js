import React, {useEffect, useRef, useState} from 'react';
import DefaultDropdown from './DefaultDropdown';
import useCustomSelect from '../hooks/useCustomSelect';

// mode = titles(default) -> если в checkedOptions передаются titles(значения отображаемые в dropdown items)
// mode = values -> если в checkedOptions передаются values(значения которые нужны для вычислений и логики, прикрепляются к dropdown items, но не отображаются в UI)
const CustomSelect = React.memo(({mode = 'titles', options = [], checkedOptions, btnClass, className, title, isShow, modificator, callback, child, placeholder, align}) => {
    const [dropdownItems, setDropdownItems] = useState([])
    const [checkedValue, setCheckedValue] = useState(null)
    const [checkedTitle, setCheckedTitle] = useState(null)
    const {current: DropdownChild} = useRef(child ?? DefaultDropdown)
    const {isShowDropdown, toggleDropdown, closeDropdown, ref} = useCustomSelect(isShow)

    const onSelectItem = (title, value) => {
        callback && callback({title, value})
    }

    useEffect(() => {
        options.length && setDropdownItems(options.map((option, index) => option.value ? option : ({
            title: option,
            value: index
        })))
    }, [options])

    useEffect(() => {
        if (dropdownItems.length && checkedOptions.length === 1) {
            if (mode === 'titles') {
                const title = checkedOptions[0]
                setCheckedTitle(title)
                const foundValue = dropdownItems.find(item => item.title === title)
                foundValue && setCheckedValue(foundValue.value)
            } else {
                const value = checkedOptions[0]
                setCheckedValue(value)
                const foundTitle = dropdownItems.find(item => item.value === value)
                foundTitle && setCheckedTitle(foundTitle.title)
            }
        }
    }, [dropdownItems, checkedOptions])

    return (
        <div
            className={`custom-select ${modificator ? 'custom-select_' + modificator : ''} ${className ?? ''} ${isShowDropdown ? 'show' : ''}`}
            ref={ref}
        >
            <button
                type="button"
                className={`custom-select__toggle ${modificator ? 'custom-select__toggle_' + modificator : ''} ${btnClass ? btnClass : ''}`}
                onClick={() => toggleDropdown()}
            >
                {
                    dropdownItems.length
                        ? <div>{title || checkedTitle || 'Выберите значение'}</div>
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
                    isShow={isShowDropdown}
                    options={dropdownItems}
                    onSelectItem={onSelectItem}
                    closeDropdown={closeDropdown}
                    checkedOptions={checkedOptions}
                    mode={mode}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
})

export default CustomSelect;