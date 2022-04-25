import React, {useState, useEffect, useRef} from 'react';

export default function CustomSelect(props, {de,me,ye}) {

    const [visible, setVisibility] = useState(false);

    const options = props.options;

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibility(false);
        }
    }

    const handleChange = (e) => {
        props.de?.(e.target.value);
        props.ye?.(e.target.value);
        let indexMonth = props.options.findIndex((item) => item === e.target.value);
        props.me?.(e.target.value);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    })

    return (
        <div ref={ref} className={"custom-select " + props.className}>
            <button type="button" className={props.btnClass} onClick={() => setVisibility((visible === false))}>
                <div>{props.checkedOpt}</div>
                <svg className="ms-2" viewBox="0 0 23 12" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961"/>
                    <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)"/>
                </svg>
            </button>
            <div className={visible ? 'options py-2' : 'options d-none py-2'} data-alignment={props.alignment}>
                {options.map(function(item) {
                    return (
                        <label className="radio-line" key={item}>
                            <input
                                type="radio"
                                name="type"
                                value={item}
                                checked={(item === props.checkedOpt)}
                                onChange={handleChange}
                            />
                            <div>{item}</div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}