import React, {useEffect, useState} from "react";
import MainPage from "../MainPage";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {postUserActivation} from "../API/ActivationAccount";

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
            } catch (err) {
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
                <NavLink to="/entrance" className="color-1 bb-1">Вход</NavLink>
                </h1>
            </div>

    )
}