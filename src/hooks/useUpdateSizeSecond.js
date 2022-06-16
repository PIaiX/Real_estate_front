import {useEffect, useState} from 'react';

const useUpdateSize = (size) => {
    const [view, setView] = useState('tiled');

    useEffect(() => {
        function updateSize() {
            if (window.matchMedia(`(max-width: ${size})`).matches) {
                setView('tiled');
            }
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return [view, setView]
}

export default useUpdateSize