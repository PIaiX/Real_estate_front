import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Conversations from '../../components/Conversations';

export default function ConversationsPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="conversations">
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1">Сообщения</h4>
            <Conversations />
        </div>
    )
}
