import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import ResponseCard from '../../components/ResponseCard';
import {checkPhotoPath} from '../../helpers/photo';
import Loader from '../../components/Loader';
import PaginationCustom from '../../components/PaginationCustom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import useRedirectToPath from '../../hooks/redirectToPath';
import {getCompletedResponses, getInProcessResponses,} from '../../API/responses';

const InWork = () => {
    const initialPageLimit = 10
    const {page} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const token = useSelector(state => state?.accessToken)
    const [tab, setTab] = useState('process') // completed
    useRedirectToPath(`/personal-account/in-work-${tab}/page/1`, [tab])
    const navigate = useNavigate()
    const [inProcess, setInProcess] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })
    const [completed, setCompleted] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })

    const getInProcessResponsesRequest = (page, limit) => {
        (userId && token && page) && getInProcessResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setInProcess({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setInProcess(prev => ({...prev, isLoading: true, error})))
    }

    const getCompletedResponsesRequest = (page, limit) => {
        (userId && token && page) && getCompletedResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setCompleted({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setCompleted(prev => ({...prev, isLoading: true, error})))
    }

    const updateData = () => {
        if (userId && token && page) {
            getInProcessResponsesRequest(page, initialPageLimit)
            getCompletedResponsesRequest(page, initialPageLimit)
        }
    }

    useEffect(() => getInProcessResponsesRequest(page, initialPageLimit), [page])
    useEffect(() => getCompletedResponsesRequest(page, initialPageLimit), [page])

    useEffect(() => {
        if (inProcess?.isLoading) {
            if (inProcess?.items?.length === 0){
                navigate(`/personal-account/in-work-process/page/1`)
            } else if ((inProcess?.items?.length === 0) && (+page === 1)) {
                getInProcessResponsesRequest(page, initialPageLimit)
            }
        }
    }, [inProcess?.items?.length])

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">В работе</h4>
            <ul className='tabs mb-4'>
                <li>
                    <button
                        className={tab === 'process' ? 'active' : ''}
                        onClick={() => setTab('process')}
                    >
                        Текущие ({inProcess?.meta?.meta?.total || 0})
                    </button>
                </li>
                <li>
                    <button
                        className={tab === 'completed' ? 'active' : ''}
                        onClick={() => setTab('completed')}
                    >
                        Выполненные ({completed?.meta?.meta?.total || 0})
                    </button>
                </li>
            </ul>
            <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-xxl-1 g-3 g-md-4">
                {(tab === 'process')
                    ? (
                        inProcess.isLoading
                            ? inProcess?.items?.length
                                ? inProcess.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            type='work'
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Текущих нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                    : (
                        completed.isLoading
                            ? completed?.items?.length
                                ? completed.items.map(item => (
                                    <div key={item.id}>
                                        <ResponseCard
                                            id={item?.id}
                                            userName={item?.user?.fullName}
                                            avatar={checkPhotoPath(item?.user?.avatar)}
                                            price={item?.price}
                                            priceType={(typeof item?.priceTypeForUser === 'string') && item.priceTypeForUser.toLowerCase()}
                                            description={item?.description}
                                            experience={(typeof item?.service?.experienceTypeForUser === 'string') && item.service.experienceTypeForUser.toLowerCase()}
                                            rating={item?.user?.rating}
                                            updateData={updateData}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Выполненных нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
            </div>
            {(tab === 'process' && inProcess?.items?.length > 0) && <PaginationCustom baseUrl='personal-account/in-work-process' meta={inProcess.meta}/>}
            {(tab === 'completed' && completed?.items?.length > 0) && <PaginationCustom baseUrl='personal-account/in-work-completed' meta={completed.meta}/>}
        </div>
    );
};

export default InWork;