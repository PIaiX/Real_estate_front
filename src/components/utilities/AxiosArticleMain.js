import React, {useEffect, useRef, useState} from "react";
import Article from "../Article";

export default function AxiosArticleMain(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        if(props.data){
            setData(props.data.data)
        } else (console.log("error2"));
    }, [props.data])

    return (
        data ?
        <>
            {data.map((data) =>
                        <div key={data.id}>
                            <Article
                                imgUrl="/real_estate/img/nophoto.jpg"
                                title={data.title}
                                text={data.description}
                                articleUrl={data.slug}
                            />
                        </div>
                )}
        </>
            : null
    )
}