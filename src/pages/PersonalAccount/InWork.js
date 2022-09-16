import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ResponseCard from '../../components/ResponseCard';
import {checkPhotoPath} from '../../helpers/photo';
import Loader from '../../components/Loader';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import {getCompletedResponses, getInProcessResponsesExecutor, getInProcessResponsesOwner,} from '../../API/responses';
import CustomSelect from "../../components/CustomSelect";
import usePagination from "../../hooks/pagination";
import Pagination from "../../components/Pagination";

const optionsInWork = [
    {value: 'owner', title: 'Отклики по моим объявлениям'},
    {value: 'executor', title: 'Мои отклики'}
]

const InWork = () => {

    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const outMeExecutor = usePagination(2)
    const inMeOwner = usePagination(2)
    const completeWorks = usePagination(2)
    const token = useSelector(state => state?.accessToken)
    const [tab, setTab] = useState('process') // || completed

    const [inProcessOwner, setInProcessOwner] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })
    const [inProcessExecutor, setInProcessExecutor] = useState({
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

    const [selectedType, setSelectedType] = useState({
        value: 'owner', title: 'Отклики по моим объявлениям'
    })

    useEffect(() => {
        getInProcessResponsesRequestOwner(inMeOwner.currentPage, inMeOwner.pageLimit)
        window.scrollTo(0, 0)
    }, [inMeOwner.currentPage])

    useEffect(() => {
        getInProcessResponsesRequestExecutor(outMeExecutor.currentPage, outMeExecutor.pageLimit)
        window.scrollTo(0, 0)
    }, [outMeExecutor.currentPage])

    useEffect(() => {
        getCompletedResponsesRequest(completeWorks.currentPage, completeWorks.pageLimit)
        window.scrollTo(0, 0)
    }, [completeWorks.currentPage])

    useEffect(() => {
        if (inProcessOwner?.items?.length === 0 && selectedType?.value === 'owner') {
            inMeOwner.setStartingPage(1)
            inMeOwner.setCurrentPage(1)
        }
    }, [inProcessOwner?.items?.length, selectedType?.value])

    useEffect(() => {
        if (inProcessExecutor?.items?.length === 0 && selectedType?.value === 'executor') {
            outMeExecutor.setStartingPage(1)
            outMeExecutor.setCurrentPage(1)
        }
    }, [inProcessExecutor?.items?.length, selectedType?.value])

    const getInProcessResponsesRequestOwner = (page, limit) => {
        (userId && token && page) && getInProcessResponsesOwner(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setInProcessOwner({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setInProcessOwner(prev => ({...prev, isLoading: true, error})))
    }

    const getInProcessResponsesRequestExecutor = (page, limit) => {
        (userId && token && page) && getInProcessResponsesExecutor(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setInProcessExecutor({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setInProcessExecutor(prev => ({...prev, isLoading: true, error})))
    }

    const getCompletedResponsesRequest = (page, limit) => {
        (userId && token && page) && getCompletedResponses(axiosPrivate, userId, {page, limit, token, orderBy: 'desc'})
            .then(result => setCompleted({isLoading: true, meta: {meta: result?.meta}, items: result?.data}))
            .catch(error => setCompleted(prev => ({...prev, isLoading: true, error})))
    }

    const updateInProcessOwner = () => {
        if (userId && token && inMeOwner.currentPage) {
            getInProcessResponsesRequestOwner(inMeOwner.currentPage, inMeOwner.pageLimit)
            getCompletedResponsesRequest(completeWorks.currentPage, completeWorks.pageLimit)
        }
    }

    const updateInProcessExecutor = () => {
        if (userId && token && outMeExecutor.currentPage) {
            getInProcessResponsesRequestExecutor(outMeExecutor.currentPage, outMeExecutor.pageLimit)
            getCompletedResponsesRequest(completeWorks.currentPage, completeWorks.pageLimit)
        }
    }

    const returnerTotal = () => {
        if (selectedType.value === 'owner' && inProcessOwner?.isLoading) {
            return inProcessOwner?.meta?.meta?.total
        } else if (selectedType.value === 'executor' && inProcessExecutor?.isLoading) {
            return inProcessExecutor?.meta?.meta?.total
        } else {
            return 0
        }
    }

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
                        Текущие ({returnerTotal()})

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
            {tab === 'process' &&
                <div className='mb-4'>
                    <CustomSelect
                        options={optionsInWork}
                        checkedOptions={[selectedType?.title]}
                        callback={({value, title}) => {
                            setSelectedType({value, title})
                        }}
                    />
                </div>
            }
            <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-xxl-1 g-3 g-md-4">
                {((tab === 'process') && (selectedType?.value === 'owner'))
                    && (
                        inProcessOwner?.isLoading
                            ? inProcessOwner?.items?.length
                                ? inProcessOwner?.items?.map(item => (
                                    <div key={item?.id} className='d-flex flex-column'>
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
                                            updateData={updateInProcessOwner}
                                            userId={item?.user?.id}
                                            serviceDes={item?.service?.description}
                                            subService={item?.service?.subService}
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Текущих нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
                {((tab === 'process') && (selectedType?.value === 'executor')) && (
                    inProcessExecutor?.isLoading
                        ? inProcessExecutor?.items?.length
                            ? inProcessExecutor?.items?.map(item => (
                                <div key={item?.id} className='d-flex flex-column'>
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
                                        updateData={updateInProcessExecutor}
                                        userId={item?.user?.id}
                                        serviceDes={item?.service?.description}
                                        subService={item?.service?.subService}
                                    />
                                </div>
                            ))
                            : <h5 className="text-center p-5 w-100">Текущих нет</h5>
                        : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                )}
                {(tab === 'completed') && (
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
                                        userId={item?.user?.id}
                                        serviceDes={item?.service?.description}
                                        subService={item?.service?.subService}
                                    />
                                </div>
                            ))
                            : <h5 className="text-center p-5 w-100">Выполненных нет</h5>
                        : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                )}
            </div>
            {((tab === 'process') && (inProcessOwner?.meta?.meta?.total > 0) && (selectedType?.value === 'owner')) &&
                <Pagination
                    pageLimit={inMeOwner.pageLimit}
                    currentPage={inMeOwner.currentPage}
                    setCurrentPage={inMeOwner.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={inProcessOwner?.meta?.meta?.total || 0}
                    startingPage={inMeOwner.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={inMeOwner.setStartingPage}
                />
            }
            {((tab === 'process') && (inProcessExecutor?.meta?.meta?.total > 0) && (selectedType?.value === 'executor')) &&
                <Pagination
                    pageLimit={outMeExecutor.pageLimit}
                    currentPage={outMeExecutor.currentPage}
                    setCurrentPage={outMeExecutor.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={inProcessExecutor?.meta?.meta?.total || 0}
                    startingPage={outMeExecutor.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={outMeExecutor.setStartingPage}
                />
            }
            {((tab === 'completed') && (completed?.meta?.meta?.total > 0)) &&
                <Pagination
                    pageLimit={completeWorks.pageLimit}
                    currentPage={completeWorks.currentPage}
                    setCurrentPage={completeWorks.setCurrentPage}
                    pagesDisplayedLimit={3}
                    itemsAmount={completed?.meta?.meta?.total || 0}
                    startingPage={completeWorks.startingPage}
                    className='mt-4 mt-sm-5'
                    setStartingPage={completeWorks.setStartingPage}
                />
            }
        </div>
    );
};

export default InWork;