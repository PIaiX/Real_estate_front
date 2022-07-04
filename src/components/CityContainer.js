import React, {useEffect, useState} from 'react'
import CustomSelect from './CustomSelect'
import CityPopup from './CityPopup'
import useSelectedCity from '../hooks/useSelectedCity'
import useMapCenter from '../hooks/useMapCenter'
import defineMapCenter from '../API/defineMapCenter'
import {withYMaps} from 'react-yandex-maps'
import SearchDropdown from './SearchDropdown';
import {getCities} from '../API/cities';

const CityContainer = React.memo(({ymaps}) => {
    const [isShowCities, setIsShowCities] = useState(false)
    const {city, setCity, isDefinedCity} = useSelectedCity()
    const {setMapCenter} = useMapCenter(ymaps, city)
    const [cities, setCities] = useState([])

    useEffect(() => {
        getCities().then(res => {
            if (res.status === 200) {
                setCities(res.body)
            }
        })
    }, [])

    const changeDefinedCity = (title) => {
        localStorage.setItem('userCity', title)
        setCity(title)
        ymaps
            ? defineMapCenter(ymaps, title).then(coords => {
                localStorage.setItem('mapCenter', coords)
                setMapCenter(coords)
            })
            : null
        setIsShowCities(false)
    }

    const changeCity = (title) => {
        const localStorageUserCity = localStorage.getItem('userCity')
        const localStorageMapCenter = typeof(localStorage.getItem('mapCenter')) === 'string'
            ? localStorage.getItem('mapCenter').split(',')
            : localStorage.getItem('mapCenter')

        if (title !== localStorageUserCity) {
            setCity(title)
            ymaps
                ? defineMapCenter(ymaps, title).then(coords => {
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
                isShow={isShowCities}
                checkedOptions={[city]}
                options={cities}
                callback={({title}) => {
                    if (isShowCities) {
                        changeDefinedCity(title)
                    } else {
                        changeCity(title)
                    }
                }}
                child={SearchDropdown}
                placeholder='Find your city'
                align='right'
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