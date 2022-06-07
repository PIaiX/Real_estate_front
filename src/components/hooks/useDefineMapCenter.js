import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const useDefineMapCenter = (ymaps) => {
    const selectedCity = useSelector(state => state.selectedCity)
    const [mapCenter, setMapCenter] = useState([null])

    useEffect(() => {
        const defineMapCenter = async (selectedCity) => {
            try {
                const ymapsGeocoder = await ymaps.geocode(selectedCity);
                if (ymapsGeocoder) {
                    setMapCenter(ymapsGeocoder.geoObjects.get(0).geometry.getCoordinates())
                }
            } catch (err) {
                console.log(err)
            }
        }

        if (ymaps && selectedCity) {
            defineMapCenter(selectedCity)
        }

    }, [ymaps, selectedCity])

    if (mapCenter) {
        return mapCenter
    }
}

export default useDefineMapCenter