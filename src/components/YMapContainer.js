import React, {useEffect, useState} from 'react';
import YMap from './YMap';
import OffcanvasCards from './OffcanvasCards';
import OffcanvasFilters from './OffcanvasFilters';
import {animateScroll as scroll} from 'react-scroll';

const YMapContainer = ({catalog, isShowMap, filters, setFilters, onResetFilters, onApplyFilters, foundCount}) => {
    const [ids, setIds] = useState([])
    const [cards, setCards] = useState([])
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

    useEffect(() => {
        const result = []

        catalog.forEach(item => {
            ids.forEach(id => {
                if (id === item.id) {
                    result.push(item)
                }
            })
        })

        setCards(result)
    }, [ids])

    return (
        <div className='catalog__ymaps-container'>
            <YMap
                catalog={catalog}
                className='catalog__ymaps'
                callback={ids => setIds(ids)}
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
            <OffcanvasCards cards={cards}/>
        </div>
    );
};

export default YMapContainer;