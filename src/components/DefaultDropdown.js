import React from 'react';

const DefaultDropdown = ({options, onSelectItem, closeDropdown, checkedValues}) => {
    const DropdownItem = ({item}) => (
        <label className="radio-line" key={item.value}>
            <input
                type="radio"
                name="type"
                value={item.value}
                onClick={closeDropdown}
                onChange={() => onSelectItem(item.title, item.value)}
                checked={checkedValues.includes(item.value)}
            />
            <div>{item.title}</div>
        </label>
    )

    return (
        <div className='dropdown-list__inner'>
            {
                options?.length
                    ? options.map(item => <DropdownItem key={item.value} item={item}/>)
                    : <div className='p-2'>Нет доступных значений</div>
            }
        </div>
    )
}

export default DefaultDropdown;