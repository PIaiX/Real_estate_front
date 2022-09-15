import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import AxiosArticleMain from "./AxiosArticleMain";
import {getNews} from "../API/news";
import usePagination from "../hooks/pagination";
import Pagination from "./Pagination";

export default function Articles({routeName}) {

    const {pathname} = useLocation()
    const articlesPag = usePagination(6)
    const [dataArticles, setDataArticles] = useState([]);

    useEffect(() => {
         getNews(articlesPag.currentPage, articlesPag.pageLimit).then(res => setDataArticles(res))
    }, [articlesPag.currentPage])

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
                <Pagination
                    pageLimit={articlesPag.pageLimit}
                    currentPage={articlesPag.currentPage}
                    setCurrentPage={articlesPag.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={dataArticles?.meta?.total || 0}
                    startingPage={articlesPag.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={articlesPag.setStartingPage}
                />
            </div>
        </main>
    )
}
