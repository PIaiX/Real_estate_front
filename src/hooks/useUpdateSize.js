import {useEffect, useState} from 'react';

const useUpdateSize = (size) => {
    const [view, setView] = useState('as-a-list');

    useEffect(() => {
        function updateSize() {
            if (window.matchMedia(`(max-width: ${size})`).matches) {
                setView('tiled');
            } else {
                setView('as-a-list');
            }
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return view;
}

export default useUpdateSize