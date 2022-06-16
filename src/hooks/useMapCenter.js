import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import mapCenterActions from '../store/actions/mapCenter';
import defineMapCenter from '../API/defineMapCenter';

const useMapCenter = (ymaps, city) => {
    const dispatch = useDispatch()
    const mapCenter = useSelector(state => state.mapCenter)
    const selectedCity = useSelector(state => state.selectedCity)
    const {setMapCenter} = bindActionCreators(mapCenterActions, dispatch)
    const [coords, setCoords] = useState(null)
    const localStorageUserCity = localStorage.getItem('userCity')
    const localStorageMapCenter = typeof(localStorage.getItem('mapCenter')) === 'string'
        ? localStorage.getItem('mapCenter').split(',')
        : localStorage.getItem('mapCenter')

    const memoizeDefineMapCenter = useCallback(defineMapCenter, [localStorageUserCity, selectedCity])

    useEffect(() => {
        if (localStorageMapCenter) {
            setCoords(localStorageMapCenter)
        } else {
            if (ymaps && localStorageUserCity) {
                memoizeDefineMapCenter(ymaps, localStorageUserCity).then(coords => {
                    setCoords(coords)
                    localStorage.setItem('mapCenter', coords)
                })
            }
        }
    }, [ymaps])

    useEffect(() => {
        if (coords) {
            setMapCenter(coords)
        }
    }, [coords])

    return {mapCenter: coords, setMapCenter: setCoords}
}

export default useMapCenter