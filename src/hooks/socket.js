import {useEffect, useState} from 'react';
import {socketInstance} from '../API/socketInstance';

const useSocket = () => {
    const [isConnected, setIsConnected] = useState(socketInstance?.connected);

    useEffect(() => {
        socketInstance?.on('connect', () => {
            setIsConnected(true);
        });

        socketInstance?.on('disconnect', () => {
            setIsConnected(false);
        });

        return () => {
            socketInstance?.off('connect');
            socketInstance?.off('disconnect');
        };
    }, []);

    return {isConnected}
}

export default useSocket