import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import selectedCityActions from '../../store/actions/selectedCity';
import {defineCity} from '../API/defineCity';

const useSelectedCity = () => {
    const selectedCity = useSelector(state => state.selectedCity)
    const dispatch = useDispatch()
    const {setSelectedCity} = bindActionCreators(selectedCityActions, dispatch)
    const [activeCity, setActiveCity] = useState(null)
    const [isDefinedCity, setIsDefinedCity] = useState(false)

    useEffect(() => {
        const req = async () => {
            const result = await defineCity()
            if (result) {
                setActiveCity(result)
                setIsDefinedCity(true)
            }
        }

        if (selectedCity) {
            setActiveCity(selectedCity)
        } else {
            req()
        }
    }, [])

    useEffect(() => {
        if (activeCity) {
            setSelectedCity(activeCity)
        }
    }, [activeCity])

    return {city: activeCity, setCity: setActiveCity, isDefinedCity}
}

export default useSelectedCity