import React, {useEffect, useRef, useState} from 'react';
import useCustomSelect from '../hooks/useCustomSelect';

const MultiCheckboxSelect = ({mode = 'titles', options = [], checkedOptions, btnClass, className, title, isShow, modificator, callback, align}) => {
    const [dropdownItems, setDropdownItems] = useState([])
    const [checkedCount, setCheckedCount] = useState(checkedOptions.length)
    const {isShowDropdown, toggleDropdown, ref} = useCustomSelect(isShow)

    const onSelectItem = (title, value) => {
        callback && callback({title, value})
    }

    useEffect(() => {
        options.length && setDropdownItems(options.map((option, index) => option.value ? option : ({
            title: option,
            value: index,
            isChecked: checkedOptions.length && (mode === 'titles' ? checkedOptions.includes(option.title) : checkedOptions.includes(option.value))
        })))
    }, [options, checkedOptions, mode])

    useEffect(() => {
        setCheckedCount(checkedOptions.length)
    }, [checkedOptions])

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
                        ? <div>{(checkedCount && `Выбрано: ${checkedCount}`) || title || 'Выберите значение'}</div>
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
                <div className='dropdown-list__inner'>
                    {
                        dropdownItems?.length
                            ? dropdownItems.map(item => (
                                <label className="checkbox-line" key={item.value}>
                                    <input
                                        type="checkbox"
                                        onChange={() => onSelectItem(item.title, item.value)}
                                        checked={item.isChecked}
                                    />
                                    <div>{item.title}</div>
                                </label>
                            ))
                            : <div className='p-2'>Нет доступных значений</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MultiCheckboxSelect;