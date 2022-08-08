import React from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import UserCard from '../../components/UserCard';

export default function Responses(props) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='px-2 px-sm-4 pb-4 pb-sm-5'>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Мои отклики</h4>
            <ul className='tabs mb-4'>
                <li><button className='active'>Мне откликнулись (13)</button></li>
                <li><button className=''>Вы откликнулись (25)</button></li>
            </ul>
            <div className="row px-4 px-sm-0 row-cols-sm-2 row-cols-xxl-1 g-3 g-md-4">
                <div>
                    <UserCard userName={'Имя Фамилия'} link={`/`} linkState={''} linkClick={() => scrollToTop()} rating={'3.35'} service={'Дизайнер'}/>
                </div>
            </div>
            <nav className="mt-4">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                            <img src="/img/icons/prev2.svg" alt="Previous"/>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">...</li>
                    <li className="page-item"><a className="page-link" href="/">6</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                            <img src="/img/icons/next2.svg" alt="Next"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}