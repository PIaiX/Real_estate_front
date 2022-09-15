import React, {useEffect, useState} from "react";
import Article from "./Article";
import {checkPhotoPath} from "../helpers/photo";

export default function AxiosArticleMain(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        if(props.data){
            setData(props.data.data)
        }
    }, [props.data])

    return (
        data ?
        <>
            {data.map((data) =>
                        <div key={data.id} className='d-flex'>
                            <Article
                                imgUrl={checkPhotoPath(data?.image)}
                                title={data.title}
                                text={data.description}
                                articleUrl={data.slug}
                                pathname={props?.pathname}
                                routeName={props?.routeName}
                            />
                        </div>
                )}
        </>
            : null
    )
}