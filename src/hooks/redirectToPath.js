import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const useRedirectToPath = (path = '', deps = []) => {
    const navigate = useNavigate()

    useEffect(() => navigate(path), deps)
}

export default useRedirectToPath