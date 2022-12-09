import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {Link} from "react-router-dom";
import Loader from "../components/Loader";
import {getTypesEstate} from "../API/typesEstate";
import Tile from "../components/Tile";

const CatalogList = () => {

    const [typesEstate, setTypesEstate] = useState([])

    useEffect(() => {
        getTypesEstate().then(result => setTypesEstate(result))
    }, [])

    return (
        <main>
            <Breadcrumbs currentRouteName="Категории объявлений"/>

            <div className="sec-9 container">
                <h1 className="text-center text-md-start">Категории</h1>
            </div>

            <section id="sec-2" className="container tiles px-xxl-5 mb-6">
                {
                    typesEstate &&
                    typesEstate.map(type => (
                        <Tile
                            key={type.id}
                            img={`/img/icons/${type.slug}.svg`}
                            titles={[type.name]}
                            hoverLinks={[
                                {name: 'Продать', link: '/advertise'},
                                {name: 'Сдать', link: '/advertise'},
                                {name: 'Купить', link: `/catalog/page/1?transactionType=1&typesEstate=${type.id}`},
                                {name: 'Снять', link: `/catalog/page/1?transactionType=0&typesEstate=${type.id}`}]}
                        />
                    ))
                }
            </section>
        </main>
    );
};

export default CatalogList;