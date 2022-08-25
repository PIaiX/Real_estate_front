import {io, Socket} from 'socket.io-client';

export let socketInstance

export const setSocketConnection = async (userId = 0) => {
    socketInstance = await io(`${process.env.REACT_APP_BASE_URL}:3333`, {query: {userId}})

    console.log(socketInstance)
}


