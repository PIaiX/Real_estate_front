import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import {getServicesTypes} from "../API/services";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Loader from "../components/Loader";
import {servicesTypesLocal} from '../helpers/services'

export default function AllServices() {

    const axiosPrivate = useAxiosPrivate()
    const [servicesTypes, setServicesTypes] = useState({
        isLoading: false,
        data: [],
        error: null,
    })

    useEffect(() => {
        getServicesTypes(axiosPrivate).then(res => {
            setServicesTypes({isLoading: true, data: res})
        }).catch(error => setServicesTypes({isLoading: true, error: error}))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const findPhoto = (name) => {
        let photo
        servicesTypesLocal.find(i => {
            if(i.name === name){
                return photo = i.image
            }
        })
        return photo
    }

    return (
        <main>
            <Breadcrumbs currentRouteName="Услуги"/>

            <div className="sec-9 container">
                <h1 className="text-center text-md-start">Услуги</h1>
            </div>

            <section className='sec-9 mb-5'>
                <div className='container'>
                    <nav className='service-nav '>
                        <ul className='list-unstyled row row-cols-md-2 g-4'>
                            {servicesTypes.isLoading
                                ? servicesTypes?.data?.map(service => (
                                        <li key={service.id}>
                                            <Link to={`/service/${service.slug}`} state={{id: service.id}} className='big fill' >
                                                {findPhoto(service.name)}
                                                <span>{service.name}</span>
                                            </Link>
                                        </li>
                                    ))
                                : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
                            }
                        </ul>
                    </nav>
                </div>
            </section>
        </main>
    )
}
