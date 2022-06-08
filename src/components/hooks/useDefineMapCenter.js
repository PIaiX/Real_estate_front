import {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const useDefineMapCenter = (ymaps) => {
    const selectedCity = useSelector(state => state.selectedCity)
    const [mapCenter, setMapCenter] = useState([null])

    const defineMapCenter = async (selectedCity) => {
        try {
            const ymapsGeocoder = await ymaps.geocode(selectedCity);
            if (ymapsGeocoder) {
                setMapCenter(ymapsGeocoder.geoObjects.get(0).geometry.getCoordinates())
            }
        } catch (err) {
            setMapCenter([0, 0])
            console.log(err)
        }
    }

    const memoizeDefineMapCenter = useCallback(defineMapCenter, [selectedCity])

    useEffect(() => {

        if (ymaps && selectedCity) {
            memoizeDefineMapCenter(selectedCity)
        }

    }, [ymaps, selectedCity])

    if (mapCenter) {
        return mapCenter
    }
}

export default useDefineMapCenter