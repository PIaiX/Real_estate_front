
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Pagination} from "react-bootstrap";

export default function PaginationCustom(props) {

    const searchParams = props.searchParams
    const [data, setData] = useState([]);
    const [prev, setPrev] = useState([]);
    const [next, setNext] = useState([]);
    const [currentPage, onPageChange] = useState(1);
    const [totalPages, setTotal] = useState([]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const getLink = (page) => {
        if (searchParams) {
            return `${props.baseUrl}/page/${page}?${searchParams.toString()}`
        } else {
            return `${props.baseUrl}/page/${page}`
        }
    }

    useEffect(() => {
        if (props.meta) {
            setData(props.meta.meta)
        }
    }, [props.meta])

    useEffect( () => {
        if (data) {
            onPageChange(data.current_page)
            setTotal(data.last_page)
            let p = (currentPage - 1);
            if (p !== 0) {
                setPrev(p)
            } else {
                setPrev(p)
            }
            let n = (currentPage + 1);
            if (n !== data.last_page) {
                setNext(n)
            } else if (n >= data.last_page) {
                setNext(data.last_page)
            }
        }
    }, [data, currentPage])

    const createPaginationItem = (i) => {
        return <Pagination.Item
            href={`/Real_estate_front#/${getLink(i)}`}
            key={i}
            active={i === currentPage}
            onClick={() => {
                onPageChange(i);
                goToTop();
            }}
            duration={1}>
            {i}
        </Pagination.Item>
    };

    const paginationItems = [];

    if(totalPages >= 6) {
        paginationItems.push(createPaginationItem(1));
        if (currentPage >= 4) paginationItems.push(<Pagination.Ellipsis/>);
        if (currentPage < 4) {
            paginationItems.push(createPaginationItem(2));
            paginationItems.push(createPaginationItem(3));
            paginationItems.push(createPaginationItem(4));
        }
        if (currentPage >= 4 && currentPage <= totalPages - 3) {
            paginationItems.push(createPaginationItem(currentPage - 1));
            paginationItems.push(createPaginationItem(currentPage));
            paginationItems.push(createPaginationItem(currentPage + 1));
        }
        if (currentPage > totalPages - 3) {
            paginationItems.push(createPaginationItem(totalPages - 3));
            paginationItems.push(createPaginationItem(totalPages - 2));
            paginationItems.push(createPaginationItem(totalPages - 1));
        }
        if (currentPage <= totalPages - 3) paginationItems.push(<Pagination.Ellipsis/>);
        paginationItems.push(createPaginationItem(totalPages));
    } else if (totalPages === 5){
        paginationItems.push(createPaginationItem(1));
        paginationItems.push(createPaginationItem(totalPages - 3));
        paginationItems.push(createPaginationItem(totalPages - 2));
        paginationItems.push(createPaginationItem(totalPages - 1));
        paginationItems.push(createPaginationItem(totalPages));
    } else if (totalPages === 4){
        paginationItems.push(createPaginationItem(1));
        paginationItems.push(createPaginationItem(totalPages - 2));
        paginationItems.push(createPaginationItem(totalPages - 1));
        paginationItems.push(createPaginationItem(totalPages));
    } else if (totalPages === 3){
        paginationItems.push(createPaginationItem(1));
        paginationItems.push(createPaginationItem(totalPages - 1));
        paginationItems.push(createPaginationItem(totalPages));
    } else if(totalPages === 2) {
        paginationItems.push(createPaginationItem(1));
        paginationItems.push(createPaginationItem(totalPages));
    } else {
        paginationItems.push(createPaginationItem(1));
    }

    return data ?
        <>
            <nav className="mt-4 mt-sm-5">
                <ul className="pagination">
                    <li className={`page-item ${prev ? '' : 'disabled'}`}>
                        <NavLink
                            to={`/${getLink(prev)}`}
                            className="page-link"
                            onClick={() => {
                                onPageChange(currentPage - 1);
                                goToTop();
                            }}
                            disabled={currentPage === 1}
                        >
                            <img src="/Real_estate_front/img/icons/prev2.svg" alt="Previous"/>
                        </NavLink>
                    </li>
                    <Pagination className="paginationInfo" >
                        {paginationItems}
                    </Pagination>
                    <li className={`page-item ${next > data.last_page ? 'disabled' : ''}`}>
                        <NavLink
                            to={`/${getLink(next)}`}
                            className="page-link"
                            onClick={() => {
                                onPageChange(currentPage + 1);
                                goToTop();
                            }}
                            disabled={currentPage === totalPages}
                        >
                            <img src="/Real_estate_front/img/icons/next2.svg" alt="Previous"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
        : null
}