import {useState} from 'react'

export default function usePagination(initialPageLimit) {
    const [pageLimit, setPageLimit] = useState(initialPageLimit)
    const [currentPage, setCurrentPage] = useState(1)
    const [startingPage, setStartingPage] = useState(1)

    return {pageLimit, setPageLimit, currentPage, setCurrentPage, startingPage, setStartingPage}
}