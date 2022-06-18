import React, {useEffect, useRef, useState} from 'react';
import DefaultDropdown from './DefaultDropdown';

export default function CustomSelect(props) {
    const ref = useRef(null);
    const [options, setOptions] = useState([])
    const [isShow, setIsShow] = useState(props.visible || false);
    const [checkedOpt, setCheckedOpt] = useState(props.checkedOpt);
    const [checkedIndex, setCheckedIndex] = useState(null)
    const [checkedVal, setCheckedVal] = useState(null)
    const [citySearch, setCitySearch] = useState('')
    const Dropdown = props.child ?? DefaultDropdown

    useEffect(() => {
        if (props.visible) {
            setIsShow(true)
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

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    };

    const handleChange = (e, index) => {
        setCheckedVal(e.target.value);
        setCheckedIndex(index)
        setIsShow(false);

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
        <div ref={ref} className={`custom-select ${props.className ?? ''}`}>
            <button type="button" className={props.btnClass}
                    onClick={() => setIsShow(prevIsShow => !prevIsShow)}>
                <div>{checkedVal}</div>
                <svg className="ms-2" viewBox="0 0 23 12" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961"/>
                    <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)"/>
                </svg>
            </button>
            <div className={`options py-2 ${isShow ? '' : 'd-none'}`} data-alignment={props.alignment}>
                <Dropdown 
                    options={options}
                    checkedIndex={checkedIndex}
                    handleChange={handleChange}
                />
            </div>
                
            {/* <DefaultDropdown
                options={options}
                checkedIndex={checkedIndex}
                isSearch={true}
                visible={visible}
                handleChange={handleChange}
                alignment={props.alignment}
            /> */}
        </div>
    )
}