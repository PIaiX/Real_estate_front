import { useState, useEffect } from 'react';

export const useGeolocation = () => {
    const [position, setPosition] = useState([]);
    const [error, setError] = useState(null);

    const onChange = ({coords}) => {
        setPosition([coords?.longitude, coords?.latitude]);
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;

        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }

        // Подписываемся на изменение геопозиции браузера.
        const watcher = geo.watchPosition(onChange, onError);

        return () => geo.clearWatch(watcher);
    }, []);

    return {position, error};
}

export default useGeolocation