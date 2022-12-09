import React, {useEffect, useState} from 'react';
import {useAccessToken, useCurrentUser} from "../store/reducers";
import {reportAds} from "../API/adspage";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {addReportUser, deleteReportUser} from "../API/userspage";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert";


export default function BtnRep(props) {

    const user = useCurrentUser()
    const token = useAccessToken()
    const userId = user?.id
    const axiosPrivate = useAxiosPrivate()
    const realEstateId = props?.realEstateId
    const data = props?.userinfo
    const type = props?.type
    const [report, setReport] = useState({})
    const [reportUserStatus, setReportUserStatus] = useState(false)
    const [reportAdStatus, setReportAdStatus] = useState(false)
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        const info = () => {
            if (userId && realEstateId) {
                setReport({"userId": userId, "realEstateId": realEstateId, "token":token})
            }
        }
        info()
    }, [userId, realEstateId])

    useEffect(() => {
        if (props?.reportStatus) {
            setReportAdStatus(props?.reportStatus)
        }
    }, [props?.reportStatus])

    useEffect(() => {
        if (props?.reportUserStatus) {
            setReportUserStatus(data?.userReport)
        }
    }, [props?.reportUserStatus,data])

    const reportAd = async () => {
            await reportAds(axiosPrivate, report)
                .catch(() => {
                setAlert('danger', true, 'Функция доступна авторизованным пользователям')
            })
            setReportAdStatus(reportAdStatus => !reportAdStatus)
    }

    const addReportForUser = async () => {
            await addReportUser(axiosPrivate, data)
                .then(() => {
                    setAlert('success', true, 'Жалоба успешно добавлена')
                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка')
                })
            setReportUserStatus(reportUserStatus => !reportUserStatus)
    }

    const deleteReportForUser = async () => {
            await deleteReportUser(axiosPrivate, data)
                .then(() => {
                    setAlert('success', true, 'Жалоба успешно отозвана')
                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка')
                })
            setReportUserStatus(reportUserStatus => !reportUserStatus)
    }

    return (
        <>
            {(type === "reportAd") &&
                <button
                    type="button"
                    className={`btn-notice ${reportAdStatus ? 'reported' : ''}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={reportAdStatus ? "Жалоба отправлена" : "Пожаловаться"}
                    onClick={reportAd}
                    disabled={reportAdStatus}
                >
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z"
                            className="fill-color"/>
                        <path
                            d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z"
                            fill="#fff"/>
                    </svg>
                </button>
            }
            {(type === "reportUser") &&
                <button
                    type="button"
                    className={`btn-notice ms-md-4 ${reportUserStatus ? 'reported' : ""}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={reportUserStatus ? "Отозвать жалобу" : "Пожаловаться"}
                    onClick={() => {
                        (reportUserStatus) ?
                            deleteReportForUser()
                            :
                            addReportForUser()
                    }}
                >
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z"
                            className="fill-color"/>
                        <path
                            d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z"
                            fill="#fff"/>
                    </svg>
                </button>
            }
        </>
    )
}