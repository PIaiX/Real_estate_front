import React, {useEffect, useState} from 'react';
import {deleteWishList} from '../API/adspage';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {useAccessToken, useCurrentUser} from '../../store/reducers';

const BtnDelFromFav = (props) => {
    const axiosPrivate = useAxiosPrivate();
    const token = useAccessToken()
    const user = useCurrentUser()
    const [data, setData] = useState({})
    const [realEstateId, setRealEstateId] = useState([])
    const [wishlistStatus, setWishlistStatus] = useState(false)

    useEffect(() => {
        if (props?.realEstateId) {
            setRealEstateId(props?.realEstateId)
        }
    }, [props?.realEstateId])

    useEffect(() => {
        if (props?.wishlistStatus) {
            setWishlistStatus(props?.wishlistStatus)
        }
    }, [props?.wishlistStatus])

    useEffect(() => {
        const info = () => {
            if (token && user?.id && realEstateId)
                setData(data => ({...data, token, userId: user?.id, realEstateId: realEstateId}))
        }
        info()
    }, [token, realEstateId, user?.id])

    const deleteFromWishList = async () => {
        const res = await deleteWishList(data, axiosPrivate)
        if (res) {
            setWishlistStatus(false)
        }
    }

    return (
        <button
            type="button"
            className="ms-4 color-1 d-flex align-items-center"
            onClick={() => wishlistStatus ? deleteFromWishList() : null}
        >
            <img src="/img/icons/pa-10.svg" alt="Удалить"/>
            <span className="ms-2">Удалить из избранного</span>
        </button>
    );
};

export default BtnDelFromFav;