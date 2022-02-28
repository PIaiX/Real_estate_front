import React, {useState} from 'react';

export default function InputRating(props) {
    const [checked, setChecked] = useState(props.value);
    return (
        <div className="rate">
            <input type="radio" name={props.name} value="5" defaultChecked={(checked === 5)?true:false} onChange={(e) => setChecked(e.target.value)}/>
            <input type="radio" name={props.name} value="4" defaultChecked={(checked === 4)?true:false} onChange={(e) => setChecked(e.target.value)}/>
            <input type="radio" name={props.name} value="3" defaultChecked={(checked === 3)?true:false} onChange={(e) => setChecked(e.target.value)}/>
            <input type="radio" name={props.name} value="2" defaultChecked={(checked === 2)?true:false} onChange={(e) => setChecked(e.target.value)}/>
            <input type="radio" name={props.name} value="1" defaultChecked={(checked === 1)?true:false} onChange={(e) => setChecked(e.target.value)}/>
        </div>
    )
}
