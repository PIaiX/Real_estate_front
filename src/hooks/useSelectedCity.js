import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import selectedCityActions from '../store/actions/selectedCity';
import defineCity from '../API/defineCity';

const useSelectedCity = () => {
    const dispatch = useDispatch()
    const {setSelectedCity} = bindActionCreators(selectedCityActions, dispatch)
    const [activeCity, setActiveCity] = useState(null)
    const [isDefinedCity, setIsDefinedCity] = useState(false)
    const localStorageUserCity = localStorage.getItem('userCity')

    useEffect(() => {
        if (localStorageUserCity) {
            setActiveCity(localStorageUserCity)
        } else {
            defineCity().then(city => {
                setActiveCity(city)
                setIsDefinedCity(true)
            })
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