import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import mapCenterActions from '../store/actions/mapCenter';
import defineMapCenter from '../API/defineMapCenter';

const useMapCenter = (ymaps) => {
    const dispatch = useDispatch()
    const {setMapCenter} = bindActionCreators(mapCenterActions, dispatch)
    const [coords, setCoords] = useState(null)
    const city = useSelector(state => state.selectedCity)
    const localStorageMapCenter = typeof(localStorage.getItem('mapCenter')) === 'string'
        ? localStorage.getItem('mapCenter').split(',')
        : localStorage.getItem('mapCenter')

    useEffect(() => {
        if (localStorageMapCenter) {
            setCoords(localStorageMapCenter)
        } else {
            if (ymaps && city) {
                defineMapCenter(ymaps, city).then(coords => {
                    setCoords(coords)
                    localStorage.setItem('mapCenter', coords)
                })
            }
        }
    }, [ymaps, city])

    useEffect(() => {
        if (coords) {
            setMapCenter(coords)
        }
    }, [coords])

    return {mapCenter: coords, setMapCenter: setCoords}
}

export default useMapCenter