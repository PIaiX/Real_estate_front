import React, {useState} from 'react'

export default function CustomSelect(props) {
    const [visible, setVisibility] = useState(false);
    const [checkedVal, setCheckedVal] = useState(props.checkedOpt);
    console.log(props.checkedOpt);
    const options = props.options;

    const handleChange = e => {
        setCheckedVal(e.target.value);
      };

    return (
        <div className="custom-select">
            <button type="button" className="btn btn-2" onClick={() => setVisibility((visible == false) ? true : false)}>
                {checkedVal}
            </button>
            <div className={visible ? 'options py-2' : 'options d-none py-2'}>
                {options.map(function(item) {
                    if(item === checkedVal) {
                        return (
                            <label>
                                <input type="radio" name="type" value={item} checked={true} onChange={handleChange}/>
                                <div>{item}</div>
                            </label>
                        )
                    } else {
                        return (
                            <label>
                                <input type="radio" name="type" value={item} checked={false} onChange={handleChange}/>
                                <div>{item}</div>
                            </label>
                        )
                    }
                })}
            </div>
        </div>
    )
}


// document.addEventListener('click', function(e) {
//     const target = e.target;
//     const current_sel = target == item || item.contains(target);
//     const sel_is_opened = options.style.display == 'block';
//     if (!current_sel && sel_is_opened) {
//         toggleMenu();
//     }
// });