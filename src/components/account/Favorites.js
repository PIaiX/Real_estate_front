import React from 'react';
import Card from '../Card';

export default function Favorites() {
    return (
        <div className="px-5">
            <h4 className="text-center color-1 mb-5">Избранное</h4>
            <div className="mb-5">
                <Card 
                    type='as-a-list'
                    images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                    title="1-к, квартира 52м2" 
                    price="6 000 000" 
                    addressName="ЖК “Столичный”" 
                    address="Вахитовский район, ул. Четаева 32" 
                    metro="Козья слобода, 7 минут"
                    text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                    date="Вчера в 21:00"
                    authorName="Колесникова Ирина"
                    authorPhoto="/real_estate/img/photo.png"
                    authorTimeSpan="сентября 2021"
                    phone="+ 7 (952) 879 78 65"
                    communalPayments="Не включая коммунальные платежи"
                    deposit="20 000"
                    commission="50%"
                    prepayment="без предоплаты"
                    tenancy="аренда от года"
                    fav={true}
                />
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="ms-4 color-1 d-flex align-items-center">
                        <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                        <span className="ms-2">Удалить из избранного</span>
                    </button>
                </div>
            </div>
            <div className="mb-5">
                <Card 
                    type='as-a-list'
                    images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                    title="1-к, квартира 52м2" 
                    price="6 000 000" 
                    addressName="ЖК “Столичный”" 
                    address="Вахитовский район, ул. Четаева 32" 
                    metro="Козья слобода, 7 минут"
                    text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                    date="Вчера в 21:00"
                    authorName="Колесникова Ирина"
                    authorPhoto="/real_estate/img/photo.png"
                    authorTimeSpan="сентября 2021"
                    phone="+ 7 (952) 879 78 65"
                    communalPayments="Не включая коммунальные платежи"
                    deposit="20 000"
                    commission="50%"
                    prepayment="без предоплаты"
                    tenancy="аренда от года"
                />
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="ms-4 color-1 d-flex align-items-center">
                        <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                        <span className="ms-2">Удалить из избранного</span>
                    </button>
                </div>
            </div>
            <div className="mb-5">
                <Card 
                    type='as-a-list'
                    images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                    title="1-к, квартира 52м2" 
                    price="6 000 000" 
                    addressName="ЖК “Столичный”" 
                    address="Вахитовский район, ул. Четаева 32" 
                    metro="Козья слобода, 7 минут"
                    text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                    date="Вчера в 21:00"
                    authorName="Колесникова Ирина"
                    authorPhoto="/real_estate/img/photo.png"
                    authorTimeSpan="сентября 2021"
                    phone="+ 7 (952) 879 78 65"
                    communalPayments="Не включая коммунальные платежи"
                    deposit="20 000"
                    commission="50%"
                    prepayment="без предоплаты"
                    tenancy="аренда от года"
                />
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="ms-4 color-1 d-flex align-items-center">
                        <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                        <span className="ms-2">Удалить из избранного</span>
                    </button>
                </div>
            </div>
            <div className="mb-5">
                <Card 
                    type='as-a-list'
                    images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                    title="1-к, квартира 52м2" 
                    price="6 000 000" 
                    addressName="ЖК “Столичный”" 
                    address="Вахитовский район, ул. Четаева 32" 
                    metro="Козья слобода, 7 минут"
                    text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                    date="Вчера в 21:00"
                    authorName="Колесникова Ирина"
                    authorPhoto="/real_estate/img/photo.png"
                    authorTimeSpan="сентября 2021"
                    phone="+ 7 (952) 879 78 65"
                    communalPayments="Не включая коммунальные платежи"
                    deposit="20 000"
                    commission="50%"
                    prepayment="без предоплаты"
                    tenancy="аренда от года"
                />
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="ms-4 color-1 d-flex align-items-center">
                        <img src="/real_estate/img/icons/pa-10.svg" alt="Удалить"/>
                        <span className="ms-2">Удалить из избранного</span>
                    </button>
                </div>
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                        <img src="/real_estate/img/icons/prev2.svg" alt="Previous"/>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">...</li>
                    <li className="page-item"><a className="page-link" href="/">6</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                        <img src="/real_estate/img/icons/next2.svg" alt="Next"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
