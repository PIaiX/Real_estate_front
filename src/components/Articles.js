import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import AxiosArticleMain from "./AxiosArticleMain";
import {getNews} from "../API/news";
import PaginationCustom from "./PaginationCustom";

export default function Articles({routeName}) {

    const {page} = useParams();
    const {pathname} = useLocation()

    const [dataArticles, setDataArticles] = useState([]);

    useEffect(() => {
        const fin = async () => {
            try {
                let result = await getNews(page, 6)
                if (result) {
                    setDataArticles(result)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fin()
    }, [page])

    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <Link to="/" className="d-block d-md-none gray-3">&#10094; Назад</Link>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Статьи</li>
                    </ol>
                </nav>
            </div>

            <div className="container pb-4 pb-sm-5">
                <h1 className="text-center text-md-start">Статьи</h1>
                <div className="row row-cols-sm-2 row-cols-lg-3 gx-4 gy-4 gy-md-5 g-xxl-5">
                    <AxiosArticleMain data={dataArticles} pathname={pathname} routeName={routeName}/>
                </div>
                <PaginationCustom meta={dataArticles} baseUrl="articles"/>
            </div>
        </main>
    )
}
