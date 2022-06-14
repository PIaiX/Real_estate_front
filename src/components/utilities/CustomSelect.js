import React, {useState, useEffect, useRef} from 'react';

export default function CustomSelect(props) {
    const [options, setOptions] = useState([])
    const [visible, setVisibility] = useState(props.visible || false);
    const [checkedOpt, setCheckedOpt] = useState(props.checkedOpt);
    const [checkedIndex, setCheckedIndex] = useState(null)
    const [checkedVal, setCheckedVal] = useState(null)
    const ref = useRef(null);

    useEffect(() => {
        if (props.visible) {
            setVisibility(true)
        }
    }, [props.visible])

    useEffect(() => {
        if (props.options.length) {
            setOptions(props.options.map((item, ind) => item.index ? item : {index: ind, value: item}))
        }
        if (props.checkedOpt) {
            setCheckedOpt(props.checkedOpt)
        }
    }, [props.options, props.checkedOpt])

    useEffect(() => {
        if (options.length) {
            if (typeof checkedOpt === 'number' || props.notDefaultIndexes) {
                const {value} = options.find(option => option.index === checkedOpt)
                setCheckedIndex(checkedOpt)
                setCheckedVal(value)
            }
            if (typeof checkedOpt === 'string' && !props.notDefaultIndexes) {
                const {index} = options.findIndex(option => option.value === checkedOpt)
                setCheckedIndex(index)
                setCheckedVal(checkedOpt)
            }
        }
    }, [options, checkedOpt, props.notDefaultIndexes])

    useEffect(() => {
        if (props.callback) {
            props.callback({checkedIndex, checkedVal})
        }
    }, [checkedIndex, checkedVal])

    useEffect(() => {
        if(props.callbackDay){
            props.callbackDay(checkedIndex)
        }
        if(props.callbackMonth){
            props.callbackMonth(checkedIndex)
        }
        if(props.callbackYear){
            props.callbackYear(checkedVal)
        }
    }, [checkedIndex, checkedVal])


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibility(false);
        }
    };

    const handleChange = (e, index) => {
        setCheckedVal(e.target.value);
        setCheckedIndex(index)
        setVisibility(false);

        if (props.handleCallback) {
            props.handleCallback({checkedIndex: index, checkedVal: e.target.value})
        }
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
                <div>{checkedVal}</div>
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
                                checked={option.index === checkedIndex}
                            />
                            <div>{option.value}</div>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}