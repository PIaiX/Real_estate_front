import React, { useEffect, useState } from "react";
import useRefreshToken from "./refreshToken";

const useInitialAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();

    useEffect(() => {
        const getToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getToken();
    }, []);

    return isLoading;
};

export default useInitialAuth;