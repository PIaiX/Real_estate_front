import React, {useEffect, useState} from 'react';
import YMap from './YMap';
import OffcanvasCards from './OffcanvasCards';
import OffcanvasFilters from './OffcanvasFilters';
import {animateScroll as scroll} from 'react-scroll';
import getForMap from '../API/ymap';
import {useSelector} from 'react-redux';

const YMapContainer = ({isShowMap, filters, setFilters, onResetFilters, onApplyFilters, foundCount}) => {
    const city = useSelector(state => state.selectedCity)
    const [ids, setIds] = useState([])
    const [cards, setCards] = useState([])
    const [isShowFilters, setIsShowFilters] = useState(false)
    const [mapData, setMapData] = useState([])

    useEffect(() => {
        getForMap(city, filters).then(items => setMapData(items))
    }, [city, filters])

    useEffect(() => {
        if (isShowMap) {
            setIsShowFilters(true)
        } else {
            setIsShowFilters(false)
        }
    }, [isShowMap])

    useEffect(() => {
        if (ids?.length) {
            const result = []

            mapData.forEach(item => {
                ids.forEach(id => {
                    if (id === item.id) {
                        result.push(item)
                    }
                })
            })

            setCards(result)
        }
    }, [ids])

    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    return (
        <div className='catalog__ymaps-container'>
            <YMap
                items={mapData}
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
                enforceFocus={false}
            />
            <OffcanvasCards
                className="offcanvas-cards"
                cards={cards}
                hideOffcanvas={() => {
                    setCards([])
                    setIds([])
                }}
            />
        </div>
    );
};

export default YMapContainer;