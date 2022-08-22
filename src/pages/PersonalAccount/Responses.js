import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getIncomingsResponses, getOutgoingsResponses} from '../../API/responses';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {useSelector} from 'react-redux';
import ResponseCard from '../../components/ResponseCard';
import PaginationCustom from '../../components/PaginationCustom';
import Loader from '../../components/Loader';
import useRedirectToPath from '../../hooks/redirectToPath';
import {checkPhotoPath} from '../../helpers/photo';

export default function Responses(props) {
    const initialPageLimit = 10
    const {page} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state?.currentUser?.id)
    const token = useSelector(state => state?.accessToken)
    const [tab, setTab] = useState('in') // out
    useRedirectToPath('/personal-account/responses/page/1', [tab])
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

    const getIncomingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getIncomingsResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setIncomings(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
            .catch(error => setIncomings(prev => ({...prev, isLoading: true, error})))
    }

    const getOutgoingsResponsesRequest = (page, limit) => {
        (userId && token && page) && getOutgoingsResponses(axiosPrivate, userId, {page, limit, token})
            .then(result => setOutgoings(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
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
        console.log('incumings', incomings)
    }, [incomings])

    useEffect(() => {
        console.log(outgoings)
    }, [outgoings])

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
                        Мне откликнулись ({incomings?.items?.length || 0})
                    </button>
                </li>
                <li>
                    <button
                        className={tab === 'out' ? 'active' : ''}
                        onClick={() => setTab('out')}
                    >
                        Вы откликнулись ({outgoings?.items?.length || 0})
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
                                        />
                                    </div>
                                ))
                                : <h5 className="text-center p-5 w-100">Откликов нет</h5>
                            : <div className="d-flex justify-content-center p-5 w-100"><Loader color="#146492"/></div>
                    )
                }
            </div>
            <PaginationCustom baseUrl='/personal-account/responses' meta={tab === 'in' ? incomings.meta : outgoings.meta}/>
        </div>
    )
}