import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import UserCard from '../../components/UserCard';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {createResponse} from '../../API/responses';
import useAlert from '../../hooks/alert';
import {useSelector} from 'react-redux';

export default function AddResponse(props) {
    const {id} = useParams()
    const axiosPrivate = useAxiosPrivate()
    const token = useSelector(state => state?.accessToken)
    const userId = useSelector(state => state?.currentUser?.id)
    const [response, setResponse] = useState('')
    const {setSubmitAlert, getAlertNode} = useAlert(3000)

    const onSubmit = () => {
        const payloads = {
            userId,
            serviceId: id
        }
        if (response?.length) {
            payloads.description = response
        }

        createResponse(axiosPrivate, token, payloads)
            .then(result => {
                (result?.status === 200)
                    ? setSubmitAlert(prev => ({
                        ...prev,
                        isShow: true,
                        variant: 'success',
                        message: 'Отклик успешно отправлен'
                    }))
                    : setSubmitAlert(prev => ({
                        ...prev,
                        isShow: true,
                        variant: 'danger',
                        message: 'Что-то пошло не так, не удалось отправить отклик'
                    }))
            })
            .catch(() => setSubmitAlert(prev => ({
                ...prev,
                isShow: true,
                variant: 'danger',
                message: 'Возникла ошибка при создании отклика'
            })))
    }

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            {getAlertNode()}
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Добавление отклика</h4>

            <div className="row row-cols-sm-2 row-cols-xxl-1 px-4 px-sm-0 g-3 g-md-4">
                <div>
                    <UserCard
                        userName={'Имя Фамилия'}
                        link={`/`}
                        linkState={''}
                        // linkClick={() => scrollToTop()}
                        rating={'3.35'}
                        service={'Дизайнер'}
                    />
                </div>
                <div>
                    <form
                        className='form-response shad-box p-3 p-xl-4 p-xxl-5'
                        onSubmit={e => {
                            e.preventDefault()
                            onSubmit()
                        }}
                    >
                        <h4 className='color-1 mb-2 mb-xl-4'>Добавить отклик</h4>
                        <textarea
                            className='d-block'
                            rows={10}
                            placeholder='Напишите ваши пожелания заказчику'
                            value={response}
                            onChange={e => setResponse(e.target.value)}
                        />
                        <button type='submit' className='btn btn-1 mt-3'>Откликнуться</button>
                    </form>
                </div>
            </div>

        </div>
    );
}