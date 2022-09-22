import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getIncomingsResponses, getOutgoingsResponses} from '../../API/responses';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useDispatch, useSelector} from 'react-redux';
import ResponseCard from '../../components/ResponseCard';
import Loader from '../../components/Loader';
import {checkPhotoPath} from '../../helpers/photo';
import CustomModal from '../../components/CustomModal';
import {emitCreateWithServiceTopicMessage} from '../../API/socketConversations';
import usePagination from "../../hooks/pagination";
import Pagination from "../../components/Pagination";
import {bindActionCreators} from 'redux';
import alertActions from '../../store/actions/alert';

export default function Responses() {
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const token = useSelector(state => state?.accessToken)
    const responsesPagOut = usePagination(4)
    const responsesPagIn = usePagination(4)
    const [tab, setTab] = useState('in') // out
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

    // alert actions
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        getIncomingsResponsesRequest(responsesPagIn.currentPage, responsesPagIn.pageLimit)
        window.scrollTo(0, 0)
    }, [userId, token, responsesPagIn.currentPage])

    useEffect(() => {
        getOutgoingsResponsesRequest(responsesPagOut.currentPage, responsesPagOut.pageLimit)
        window.scrollTo(0, 0)
    }, [userId, token, responsesPagOut.currentPage])

    useEffect(() => {
        if (incomings?.items?.length === 0 && tab === 'in') {
            responsesPagIn.setCurrentPage(1)
            responsesPagIn.setStartingPage(1)
        }
    }, [incomings?.items?.length, tab])

    useEffect(() => {
        if (outgoings?.items?.length === 0 && tab === 'out') {
            responsesPagOut.setCurrentPage(1)
            responsesPagOut.setStartingPage(1)
        }
    }, [outgoings?.items?.length, tab])

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
                .then(() => {
                    setAlert('success', true, 'Сообщение отправлено')
                    resetMessage()
                })
                .catch(() => setAlert('danger', true,'Что-то пошло не так, не удалось отправить сообщение'))
        } else {
            setMessageInputError('Сообщение не должно быть пустым')
        }
    }

    const getIncomingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getIncomingsResponses(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setIncomings({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setIncomings(prev => ({...prev, isLoading: true, error})))
    }

    const getOutgoingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getOutgoingsResponses(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setOutgoings({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setOutgoings(prev => ({...prev, isLoading: true, error})))
    }

    const updateData = () => {
        if (userId && token && (responsesPagIn.currentPage || responsesPagOut.currentPage)) {
            getIncomingsResponsesRequest(responsesPagIn.currentPage, responsesPagIn.pageLimit)
            getOutgoingsResponsesRequest(responsesPagOut.currentPage, responsesPagIn.pageLimit)
        }
    }

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
                                    <div key={item.id} className='d-flex flex-column'>
                                        <ResponseCard
                                            type='in'
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                            userId={item?.userId}
                                            serviceId={item?.serviceId}
                                            setSendMessagePayloads={setSendMessagePayloads}
                                            serviceDes={item?.service?.description}
                                            subService={item?.service?.subService}
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
                                    <div key={item.id} className='d-flex flex-column'>
                                        <ResponseCard
                                            type='out'
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                            userId={item?.userId}
                                            serviceDes={item?.service?.description}
                                            subService={item?.service?.subService}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Откликов нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
            </div>
            {(tab === 'in' && incomings?.items?.length > 0) &&
                <Pagination
                    pageLimit={responsesPagIn.pageLimit}
                    currentPage={responsesPagIn.currentPage}
                    setCurrentPage={responsesPagIn.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={incomings?.meta?.meta?.total || 0}
                    startingPage={responsesPagIn.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={responsesPagIn.setStartingPage}
                />
            }
            {(tab === 'out' && outgoings?.items?.length > 0) &&
                <Pagination
                    pageLimit={responsesPagOut.pageLimit}
                    currentPage={responsesPagOut.currentPage}
                    setCurrentPage={responsesPagOut.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={outgoings?.meta?.meta?.total || 0}
                    startingPage={responsesPagOut.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={responsesPagOut.setStartingPage}
                />
            }

            <CustomModal
                isShow={sendMessagePayloads.userId}
                hideModal={() => resetMessage()}
                closeButton
            >
                <form className="message-form">
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