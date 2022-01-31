import React from 'react';
import CustomSelect from '../utilities/CustomSelect';
import { Link } from 'react-router-dom';
import InputTags from '../utilities/InputTags';

export default function CreateService() {
    return (
        <div className="px-5 pb-5">
            <h4 className="text-center color-1 mb-5">Мои услуги</h4>
            <form>
                <div className="row align-items-center mb-5">
                    <div className="col-4">
                        <div className="fs-11">Вид услуг:</div>
                    </div>
                    <div className="col-8">
                        <CustomSelect className="w-100 fs-11" btnClass="inp" checkedOpt="Дизайн" options={['Дизайн', 'Ремонт', 'Грузоперевозки', 'Услуги риелтора']}/>
                    </div>
                </div>
                <div className="row align-items-center mb-5">
                    <div className="col-4">
                        <div className="fs-11">Опыт работы:</div>
                    </div>
                    <div className="col-8">
                        <CustomSelect className="w-100 fs-11" btnClass="inp" checkedOpt="От 1 года" options={['Менее 1 года', 'От 1 года', 'От 3 лет', 'От 5 лет']}/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-4">
                        <div className="fs-11">Предоставляемые услуги:</div>
                    </div>
                    <div className="col-8">
                        <InputTags name="services" placeholder="вводите услуги по 1" />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-4">
                        <div className="fs-11">О себе:</div>
                    </div>
                    <div className="col-8">
                        <textarea placeholder="Введите текст" rows="5" className="fs-11"></textarea>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-8">
                        <div className="row row-cols-2">
                            <div><Link to="/personal-account/my-services" className="btn btn-2 w-100 fs-11">Отмена</Link></div>
                            <div><button type="submit" className="btn btn-1 w-100 fs-11">Сохранить</button></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
