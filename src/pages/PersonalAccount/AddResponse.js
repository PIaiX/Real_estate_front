import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import UserCard from '../../components/UserCard';
import CustomSelect from '../../components/CustomSelect';
import InputFile from '../../components/InputFile';

export default function AddResponse(props) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Добавление отклика</h4>

            <div className="row row-cols-sm-2 row-cols-xxl-1 px-4 px-sm-0 g-3 g-md-4">
                <div>
                    <UserCard userName={'Имя Фамилия'} link={`/`} linkState={''} linkClick={() => scrollToTop()} rating={'3.35'} service={'Дизайнер'}/>
                </div>
                <div>
                    <form className='form-response shad-box p-3 p-xl-4 p-xxl-5'>
                        <h4 className='color-1 mb-2 mb-xl-4'>Добавить отклик</h4>
                        <textarea className='d-block' rows={10} placeholder='Расскажите, как и когда вы можете выполнить заказ. Не пишите здесь ваш телефон – он будет добавлен автоматически.'></textarea>
                        <div className='d-xxl-flex mt-3'>
                            <input type='number' placeholder='Ваша цена' className='price'/>
                            <CustomSelect
                                className="ms-xxl-3"
                                btnClass="btn btn-3"
                                align="right" checkedOptions={['За услугу']}
                                options={['За услугу', 'Вариант 2']}
                            />
                        </div>
                        <div className='d-flex align-items-center mt-3'>
                            <InputFile className="fs-07"/>
                            <span className='gray-3 ms-2'>Добавить примеры работ</span>
                        </div>
                        <button type='submit' className='btn btn-1 mt-3'>Откликнуться</button>
                    </form>
                </div>
            </div>

        </div>
    );
}