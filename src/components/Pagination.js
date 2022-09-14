import React, {useEffect, useState, useCallback} from "react";
import * as _ from "lodash";

export default function Pagination(
    {
        pageLimit,
        currentPage,
        pagesDisplayedLimit,
        itemsAmount,
        setCurrentPage,
        startingPage,
        setStartingPage,
        callback,
        className
    }) {

    // Страницы до ... при большом количестве общего числа страниц
    const [pagesArrayDisplayed, setPagesArrayDisplayed] = useState([]);

    // Конечное количество страниц  = окргление(количество всех тем / лимит на странице)
    const pagesAmount = Math.ceil(itemsAmount / pageLimit);

    const getPages = useCallback(() => {
        const pages =
            (pagesAmount <= 5)
                ? [1, 2, 3, 4, 5]
                : _.range(startingPage, startingPage + pagesDisplayedLimit);
        return pages.filter((page) => page <= pagesAmount);
    }, [pagesAmount, startingPage, pagesDisplayedLimit]);

    useEffect(() => {
        callback && callback(getPages())
    }, [pagesAmount, callback])

    useEffect(() => {
        setPagesArrayDisplayed(getPages());
    }, [currentPage, getPages]);

    const handlePageSelect = (pageNum) => {
        //Make API call for a new page in the parent component
        setCurrentPage(pageNum);
    };

    const handleSelectPrevPage = () => {
        if (currentPage === 1) return;
        //Make API call for a new page in the parent component
        setCurrentPage(currentPage - 1);
        if (currentPage === pagesArrayDisplayed[0]) {
            const newStartingPage = startingPage - pagesDisplayedLimit;
            if (newStartingPage < 1) {
                setStartingPage(1);
            } else {
                setStartingPage(newStartingPage);
            }
        }
    };

    const handleSelectNextPage = () => {
        if (currentPage === pagesAmount) return;
        //Make API call for a new page in the parent component
        setCurrentPage(currentPage + 1);
        if (currentPage === pagesArrayDisplayed[pagesArrayDisplayed.length - 1]) {
            setStartingPage((prev) => prev + pagesDisplayedLimit);
        }
    };

    const handleSelectLastPage = () => {
        //Make API call for a new page in the parent component
        setCurrentPage(pagesAmount);
        setStartingPage(pagesAmount - (pagesDisplayedLimit - 1));
    };

    const handleSelectFirstPage = () => {
        //Make API call for a new page in the parent component
        setCurrentPage(1);
        setStartingPage(1);
    };

    return itemsAmount
        ? <nav className={className ?? ''}>
            <ul className="pagination">
                <li className="page-item" onClick={handleSelectPrevPage}>
                    <div
                        className="page-link"
                        style={{cursor: currentPage === 1 ? "not-allowed" : "pointer"}}
                        aria-label="Previous"
                    >
                        <img src="/img/icons/prev2.svg"/>
                    </div>
                </li>
                {/*Первая страница*/}
                {startingPage > 2 && (
                    <>
                        <li className="page-item" onClick={() => handleSelectFirstPage()}>
                            <div style={{cursor: "pointer"}} className="page-link">
                                {1}
                            </div>
                        </li>
                        <li className="page-item">...</li>
                    </>
                )}
                {/*Отрисовка страниц*/}
                {pagesArrayDisplayed.map((pageNumber, idx) => {
                    return (
                        <li
                            className={`page-item ${pageNumber === currentPage && 'active disabled'}`}
                            onClick={() => {
                                handlePageSelect(pageNumber)
                            }}
                            key={pageNumber}
                        >
                            <div

                                style={{cursor: "pointer"}}
                                className='page-link'
                            >
                                {pageNumber}
                            </div>
                        </li>
                    );
                })}
                {/*Отрисовка ... перед последней страницей*/}
                {(pagesArrayDisplayed.length !== 0)
                    ?
                    (pagesArrayDisplayed[pagesArrayDisplayed.length - 1] !== pagesAmount) &&
                    (
                        <>
                            <li className="page-item">...</li>
                            <li className="page-item" onClick={() => handleSelectLastPage()}>
                                <div style={{cursor: "pointer"}} className="page-link">
                                    {pagesAmount}
                                </div>
                            </li>
                        </>
                    )
                    :
                    (
                        <>
                            <li className="page-item" onClick={() => handleSelectLastPage()}>
                                <div style={{cursor: "pointer"}} className="page-link">
                                    {pagesAmount}
                                </div>
                            </li>
                        </>
                    )
                }
                <li className="page-item" onClick={handleSelectNextPage}>
                    <div
                        className="page-link"
                        style={{
                            cursor: currentPage === pagesAmount ? "not-allowed" : "pointer",
                        }}
                        aria-label="Next"
                    >
                        <img src="/img/icons/next2.svg" alt="Next"/>
                    </div>
                </li>
            </ul>
        </nav>
        : null
}