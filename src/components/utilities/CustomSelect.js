import React, {useState, useEffect, useRef} from 'react';

export default function CustomSelect(props) {

    const [options, setOptions] = useState([])
    const [visible, setVisibility] = useState(false);
    const [defaultIndex, setDefaultIndex] = useState(props.checkedOpt);
    const qq = options.find(option => option.index === defaultIndex)
    const [checkedVal, setCheckedVal] = useState(options.find(option => option.index === defaultIndex));
    const ref = useRef(null);

    useEffect(() => {
        if (props.options.length) {
            setOptions(props.options.map((item, ind) => item.index ? item : {index: ind, value: item}))
        }
    }, [props.options])

    useEffect(() => {
        if (options.length) {
            setCheckedVal(qq)
        }
    }, [options])

    useEffect(() => {
        if (props.callback) {
            props.callback(defaultIndex)
        }
    }, [defaultIndex])

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibility(false);
        }
    };

    const handleChange = (e, index) => {
        setCheckedVal({index, value: e.target.value});
        setDefaultIndex(index)
        setVisibility(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <div ref={ref} className={"custom-select " + props.className}>
            <button type="button" className={props.btnClass}
                    onClick={() => setVisibility((visible === false))}>
                <div>{checkedVal?.value}</div>
                <svg className="ms-2" viewBox="0 0 23 12" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961"/>
                    <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)"/>
                </svg>
            </button>
            <div className={visible ? 'options py-2' : 'options d-none py-2'} data-alignment={props.alignment}>
                {options.map(option => {
                    return (
                        <label className="radio-line" key={option.index}>
                            <input
                                type="radio"
                                name="type"
                                value={option.value}
                                onChange={e => handleChange(e, option.index)}
                                checked={option.index === defaultIndex}
                            />
                            <div>{option.value}</div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}