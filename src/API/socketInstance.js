import {io} from 'socket.io-client';

export let socketInstance

export const setSocketConnection = (userId) => {
    socketInstance = io('https://api.antontig.beget.tech', {query: {userId}})
}


