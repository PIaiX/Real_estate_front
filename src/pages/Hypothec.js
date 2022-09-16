import React, {useEffect} from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Hypothec({routeName}) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Breadcrumbs currentRouteName="Ипотека"/>

            <section className='sec-13 container mb-5'>
                <h1 className="text-center text-md-start">Предложения по иппотеке от банков-партнеров:</h1>
                <div className='row row-cols-2 row-cols-xl-4 g-2 g-sm-4'>
                    <div>
                        <div className='item shad-box-2 p-3 p-md-4'>
                            <img src="/img/sber.png" alt="Сбербанк" className='img'/>
                            <h4 className='gray-1'>Сбербанк</h4>
                            <a className='link' href="https://www.sberbank.ru/ru/person/credits/homenew" target="_blank">https://www.sberbank.ru/ru/person/credits/homenew</a>
                        </div>
                    </div>
                    <div>
                        <div className='item shad-box-2 p-3 p-md-4'>
                            <img src="/img/vtb.png" alt="ВТБ" className='img'/>
                            <h4 className='gray-1'>ВТБ</h4>
                            <a className='link' href="https://www.vtb.ru/personal/ipoteka/" target="_blank">https://www.vtb.ru/personal/ipoteka/</a>
                        </div>
                    </div>
                    <div>
                        <div className='item shad-box-2 p-3 p-md-4'>
                            <img src="/img/tinkoff.png" alt="Тинькофф" className='img'/>
                            <h4 className='gray-1'>Тинькофф</h4>
                            <a className='link' href="https://www.tinkoff.ru/loans/refinance/hypothec/" target="_blank">https://www.tinkoff.ru/loans/refinance/hypothec/</a>
                        </div>
                    </div>
                    <div>
                        <div className='item shad-box-2 p-3 p-md-4'>
                            <img src="/img/alfa.png" alt="Альфа банк" className='img'/>
                            <h4 className='gray-1'>Альфа банк</h4>
                            <a className='link' href="https://alfabank.ru/get-money/mortgage/" target="_blank">https://alfabank.ru/get-money/mortgage/</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}