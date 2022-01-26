import React, {useState} from 'react';

export default function HoverSlider(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const urls = props.urls;
    
    return (
        <div className="hover-slider">
            {
                urls &&
                urls.map(function(item, index, arr) {
                    if(arr.length < 7){
                        return (
                            <div key={index.toString()} className={(index===activeIndex) ? 'sld active' : 'sld'}>
                                <img src={item} alt="фото" />
                            </div>
                        )
                    } else {
                        if(index<5){
                            return (
                                <div key={index.toString()} className={(index===activeIndex) ? 'sld active' : 'sld'}>
                                    <img src={item} alt="фото" />
                                </div>
                            )
                        } else if(index===5){
                            return (
                                <div key={index.toString()} className={(index===activeIndex) ? 'sld active' : 'sld'}>
                                    <img src={item} alt="фото" />
                                    <div className="extra">Еще {arr.length - 6} фото</div>
                                </div>
                            )
                        } else {
                            return false;
                        }
                    }
                })
            }
            <div className="box">
                {
                    urls && urls.length>1 &&
                    urls.map(function(item, index, arr) {
                        if(index<6) {
                            return (
                                <div key={index.toString()} className={(index===activeIndex) ? 'section active' : 'section'}  onMouseEnter={() => setActiveIndex(index)}></div>
                            )
                        } else {
                            return false;
                        }
                    })
                }
            </div>
        </div>
    )
}
