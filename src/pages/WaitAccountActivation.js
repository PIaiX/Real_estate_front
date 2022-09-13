import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {postUserActivation} from "../API/auths";

export default function WaitAccountActivation() {

    const [token, setToken] = useState([]);
    /*let url = window.location.href;
    let final = url.split("/").reverse()[0];*/

    const {uuid} = useParams()

    useEffect(() => {
        const checkToken = async () => {
            try {
                const result = await postUserActivation(uuid)
                if (result) {
                    setToken(result)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        checkToken();
    }, [uuid])
    return (

            <div className="container d-flex flex-column align-content-center align-items-center">
                <h1 className="main">
                    На вашу почту выслано письмо с активацией анкеты. Активируйте анкету
                    для входа на ваш аккаунт.
                </h1>
                <h1>
                <NavLink to="/login" className="color-1 bb-1">Вход</NavLink>
                </h1>
            </div>

    )
}