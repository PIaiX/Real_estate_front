import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {getIncomingsResponses, getOutgoingsResponses} from '../../API/responses';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import ResponseCard from '../../components/ResponseCard';
import PaginationCustom from '../../components/PaginationCustom';
import Loader from '../../components/Loader';
import useRedirectToPath from '../../hooks/redirectToPath';
import {checkPhotoPath} from '../../helpers/photo';
import CustomModal from '../../components/CustomModal';
import {emitCreateWithServiceTopicMessage} from '../../API/socketConversations';

export default function Responses(props) {
    const initialPageLimit = 10
    const {page} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const token = useSelector(state => state?.accessToken)
    const [tab, setTab] = useState('in') // out
    const navigate = useNavigate()
    useRedirectToPath(`/personal-account/responses-${tab}/page/1`, [tab])
    const [incomings, setIncomings] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })
    const [outgoings, setOutgoings] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })

    // write message modal
    const initialSendMessagePayloads = {
        serviceId: null,
        userId: null
    }
    const [sendMessagePayloads, setSendMessagePayloads] = useState(initialSendMessagePayloads)
    const [messageInput, setMessageInput] = useState('')
    const [messageInputError, setMessageInputError] = useState('')

    const resetMessage = () => {
        setMessageInput('')
        setMessageInputError('')
        setSendMessagePayloads(initialSendMessagePayloads)
    }

    const onSendMessage = (e) => {
        e.preventDefault()
        const message = messageInput.trim()

        if (message.length) {
            emitCreateWithServiceTopicMessage(sendMessagePayloads.userId, {
                conversationId: 0,
                serviceId: sendMessagePayloads.serviceId,
                text: messageInput
            })
                // ! dispatch success alert
                .then(() => resetMessage())
                .catch(e => {
                    // ! dispatch error alert
                    console.log(e)
                    setMessageInputError('Что-то пошло не так, повторите попытку')
                })
            resetMessage()
        } else {
            setMessageInputError('Сообщение не должно быть пустым')
        }
    }

    const getIncomingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getIncomingsResponses(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setIncomings(prev => ({isLoading: true, meta: {meta: result?.meta}, items: result?.data})))
            .catch(error => setIncomings(prev => ({...prev, isLoading: true, error})))
    }

    const getOutgoingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getOutgoingsResponses(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setOutgoings(prev => ({isLoading: true, meta: {meta: result?.meta}, items: result?.data})))
            .catch(error => setOutgoings(prev => ({...prev, isLoading: true, error})))
    }

    const updateData = () => {
        if (userId && token && page) {
            getIncomingsResponsesRequest(page, initialPageLimit)
            getOutgoingsResponsesRequest(page, initialPageLimit)
        }
    }

    useEffect(() => getIncomingsResponsesRequest(page, initialPageLimit), [userId, token, page])
    useEffect(() => getOutgoingsResponsesRequest(page, initialPageLimit), [userId, token, page])

    useEffect(() => {
        if (incomings?.isLoading) {
            if (incomings?.items?.length === 0){
                navigate(`/personal-account/responses-in/page/1`)
            }
        }
    }, [incomings?.items?.length])

    useEffect(() => {
        if (outgoings?.isLoading) {
            if (outgoings?.items?.length === 0){
                navigate(`/personal-account/responses-out/page/1`)
            }
        }
    }, [outgoings?.items?.length])

    console.log(incomings)

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои отклики</h4>
            <ul className='tabs mb-4'>
                <li>
                    <button
                        className={tab === 'in' ? 'active' : ''}
                        onClick={() => setTab('in')}
                    >
                        Мне откликнулись ({incomings?.meta?.meta?.total || 0})
                    </button>
                </li>
                <li>
                    <button
                        className={tab === 'out' ? 'active' : ''}
                        onClick={() => setTab('out')}
                    >
                        Вы откликнулись ({outgoings?.meta?.meta?.total || 0})
                    </button>
                </li>
            </ul>
            <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-xxl-1 g-3 g-md-4">
                {(tab === 'in')
                    ? (
                        incomings.isLoading
                            ? incomings?.items?.length
                                ? incomings.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            type='in'
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                            userId={item?.userId}
                                            serviceId={item?.serviceId}
                                            setSendMessagePayloads={setSendMessagePayloads}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Откликов нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                    : (
                        outgoings.isLoading
                            ? outgoings?.items?.length
                                ? outgoings.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            type='out'
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                            userId={item?.userId}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Откликов нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
            </div>
            {(tab === 'in' && incomings?.items?.length > 0) && <PaginationCustom baseUrl='personal-account/responses-in' meta={incomings.meta} />}
            {(tab === 'out' && outgoings?.items?.length > 0) && <PaginationCustom baseUrl='personal-account/responses-out' meta={outgoings.meta} />}

            <CustomModal
                isShow={sendMessagePayloads.userId}
                setIsShow={() => resetMessage()}
                closeButton
            >
                <form className="message-form">
                    <div className="d-flex align-items-center">
                        <div className="photo me-2 me-sm-4">
                            <img src="/img/photo.png" alt="Колесникова Ирина"/>
                            {/*<div className="indicator online"/>*/}
                        </div>
                        <div>
                            <h4>Колесникова Ирина</h4>
                            {/*<div className="gray-2 fs-09">Сейчас онлайн</div>*/}
                        </div>
                    </div>
                    <textarea
                        className="mt-3"
                        rows="4"
                        placeholder="Введите сообщение"
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                    />
                    {messageInputError && (
                        <span className="message-form__error w-100 text-danger">
                            {messageInputError}
                        </span>
                    )}
                    <div className="d-flex align-items-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-1 w-100 flex-1 fs-12 ms-4"
                            onClick={onSendMessage}
                        >
                            ОТПРАВИТЬ
                        </button>
                    </div>
                </form>
            </CustomModal>
        </div>
    )
}