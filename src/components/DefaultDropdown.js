import React, {useEffect, useState} from 'react';

const DefaultDropdown = ({options, checkedIndex, handleChange}) => {

    return (
        <div className="default-dropdown">
            {options && options?.map(option => (
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

export default DefaultDropdown;