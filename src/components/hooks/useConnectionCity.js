import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import connectionCityActions from '../../store/actions/connectionCity';
import {getConnectionCity} from '../API/getConnectionCity';

const useConnectionCity = (coords) => {
    const connectionCity = useSelector(state => state.connectionCity)
    const dispatch = useDispatch()
    const {setConnectionCity} = bindActionCreators(connectionCityActions, dispatch)
    const [selectedCity, setSelectedCity] = useState(null)

    useEffect(() => {
        if (connectionCity) {
            setSelectedCity(connectionCity)
        }
    }, [connectionCity])

    useEffect(() => {
        const req = async () => {
            const result = await getConnectionCity(coords)
            if (result) {
                setConnectionCity(result)
            }
        }
        if (coords) {
            req()
        }
    }, [coords])

    useEffect(() => {
        if (selectedCity) {
            setConnectionCity(selectedCity)
        }
    }, [selectedCity])

    return {selectedCity, setSelectedCity}
}

export default useConnectionCity
