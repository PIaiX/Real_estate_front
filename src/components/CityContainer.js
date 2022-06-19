import React, {useState} from 'react'
import CustomSelect from './CustomSelect'
import CityPopup from './CityPopup'
import useSelectedCity from '../hooks/useSelectedCity'
import useMapCenter from '../hooks/useMapCenter'
import defineMapCenter from '../API/defineMapCenter'
import {withYMaps} from 'react-yandex-maps'
import SearchDropdown from './SearchDropdown';

const CityContainer = React.memo(({ymaps}) => {
    const [isShowCities, setIsShowCities] = useState(false)
    const {city, setCity, isDefinedCity} = useSelectedCity()
    const {setMapCenter} = useMapCenter(ymaps, city)

    const changeDefinedCity = (checkedVal) => {
        localStorage.setItem('userCity', checkedVal)
        setCity(checkedVal)
        ymaps
            ? defineMapCenter(ymaps, checkedVal).then(coords => {
                localStorage.setItem('mapCenter', coords)
                setMapCenter(coords)
            })
            : null
        setIsShowCities(false)
    }

    const changeCity = (checkedVal) => {
        const localStorageUserCity = localStorage.getItem('userCity')
        const localStorageMapCenter = typeof(localStorage.getItem('mapCenter')) === 'string'
            ? localStorage.getItem('mapCenter').split(',')
            : localStorage.getItem('mapCenter')

        if (checkedVal !== localStorageUserCity) {
            setCity(checkedVal)
            ymaps
                ? defineMapCenter(ymaps, checkedVal).then(coords => {
                    setMapCenter(coords)
                })
                : null
        } else {
            setCity(localStorageUserCity)
            setMapCenter(localStorageMapCenter)
        }
    }

    return (
        <div className="city-container ms-md-3 ms-xl-4 order-2 order-lg-5 align-self-center">
            <CustomSelect
                btnClass="color-2 text-uppercase"
                modificator="city"
                visible={isShowCities}
                checkedOpt={city}
                options={['Москва', 'Казань', 'Санкт-Петербург']}
                handleCallback={({checkedVal}) => {
                    if (isShowCities) {
                        changeDefinedCity(checkedVal)
                    } else {
                        changeCity(checkedVal)
                    }
                }}
                alignment="right"
                child={SearchDropdown}
            />
            <CityPopup
                city={city}
                isDefinedCity={isDefinedCity}
                setIsShowCities={setIsShowCities}
            />
        </div>
    )
})

export default withYMaps(CityContainer)