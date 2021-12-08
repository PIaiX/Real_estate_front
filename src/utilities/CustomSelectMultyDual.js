import React, {useState, useEffect, useRef} from 'react';

export default function CustomSelectMultyDual(props) {
    const [visible, setVisibility] = useState(false);

    const districts = props.districts;
    const checkedDist = props.checkedDist;
    const distCount = checkedDist.length;
    const [count1, setCount1] = useState(distCount);

    const stations = props.stations;
    const checkedSt = props.checkedSt;
    const stCount = checkedSt.length;
    const [count2, setCount2] = useState(stCount);
    

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisibility(false);
        }
    };

    const handleChange = e => {
        if (e.target.checked){
            setCount1(count1 + 1);
        } else {
            setCount1(count1 - 1);
        }
    };

    const handleChange2 = e => {
        if (e.target.checked){
            setCount2(count2 + 1);
        } else {
            setCount2(count2 - 1);
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
            <button type="button" className={props.btnClass} onClick={() => setVisibility((visible === false) ? true : false)}>
                <span>Район {count1} / Метро {count2}</span>
                <svg className="ms-2" viewBox="0 0 23 12" xmlns="http://www.w3.org/2000/svg">
                    <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961"/>
                    <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)"/>
                </svg>
            </button>
            <div className={visible ? 'options p-2' : 'options d-none py-2'}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#districts" type="button" role="tab" aria-selected="true">Районы</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#stations" type="button" role="tab" aria-selected="false">Метро</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="districts" role="tabpanel">
                        {districts.map(function(item) {
                            return (
                                <label key={item} className="mb-3">
                                    <input type="checkbox" name="district" value={item} defaultChecked={(checkedDist.includes(item)) ? true : false} onChange={handleChange}/>
                                    <span className="ms-3">{item}</span>
                                </label>
                            )
                        })}
                    </div>
                    <div className="tab-pane fade" id="stations" role="tabpanel">
                        {stations.map(function(item) {
                            return (
                                <label key={item} className="mb-3">
                                    <input type="checkbox" name="station" value={item} defaultChecked={(checkedDist.includes(item)) ? true : false} onChange={handleChange2}/>
                                    <span className="ms-3">{item}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}