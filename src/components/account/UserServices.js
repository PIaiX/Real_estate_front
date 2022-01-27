import React from 'react';
import { Link } from 'react-router-dom';

export default function UserServices() {
    return (
        <div>
            <h4 className="text-center color-1 mb-5">Мои услуги</h4>
            <img src="/real_estate/img/services-gray.svg" alt="услуги" className="img-fluid d-block mx-auto mb-5"/>
            <div className="fs-12 text-center">Предоставляете услуги реилтора, дизайнера, ремонтного рабочего или гузоперевозчика? <br /> Создайте объявление об услугах и находите заказчиков. </div>
            <Link to="create" className="btn btn-1 fs-12 mx-auto mt-5">Создать</Link>
        </div>
    )
}
