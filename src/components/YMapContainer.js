import React, {useEffect, useState} from 'react';
import YMap from './utilities/YMap';
import OffcanvasCards from './utilities/OffcanvasCards';
import OffcanvasFilters from './OffcanvasFilters';
import {animateScroll as scroll} from 'react-scroll';

const YMapContainer = ({isShowMap, filters, setFilters, onResetFilters, onApplyFilters, foundCount}) => {
    const [offcanvasCards, setOffcanvasCards] = useState([])
    const [isShowFilters, setIsShowFilters] = useState(false)

    useEffect(() => {
        if (isShowMap) {
            setIsShowFilters(true)
        } else {
            setIsShowFilters(false)
        }
    }, [isShowMap])

    useEffect(() => {
        scroll.scrollToTop()
    }, [])


    return (
        <div className='catalog__ymaps-container'>
            <YMap
                className='catalog__ymaps'
                callback={cards => setOffcanvasCards(cards)}
            />
            <OffcanvasFilters
                className='offcanvas-ymap'
                isShow={isShowFilters}
                scroll={false}
                backdrop={false}
                closeButton={false}
                filters={filters}
                setFilters={setFilters}
                onResetFilters={onResetFilters}
                onApplyFilters={onApplyFilters}
                foundCount={foundCount}
            />
            <OffcanvasCards cards={offcanvasCards}/>
        </div>
    );
};

export default YMapContainer;