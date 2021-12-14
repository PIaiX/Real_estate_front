import React from 'react'

export default function ImgPreview(props) {
    const urls = props.urls;

    return (
        <div className="img-preview">
            {
                urls &&
                urls.map(function(item, index, arr) {
                    if(index<2){
                        return (
                            <div key={index.toString()} className="wrap">
                                <img src={item} alt="фото" />
                            </div>
                        )
                    } else if(index===2){
                        return (
                            <div key={index.toString()} className="wrap">
                                <img src={item} alt="фото" />
                                <div className="extra">Еще {arr.length - 3} фото</div>
                            </div>
                        )
                    } else {
                        return false;
                    }
                })
            }
        </div>
    )
}
