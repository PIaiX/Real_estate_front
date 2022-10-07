import React from 'react';

const AdTypeCommercial = ({estateName, onChange, info, seterRadio}) => {

    return (
        <>
            {
                (
                    estateName?.toLowerCase() === 'готовый бизнес'
                ) &&
                (
                    <>
                    <hr className="d-none d-md-block my-4"/>
                    <div className="row">
                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                            <span data-for="rental-type" data-status={false}>Направление:</span>
                        </div>
                        <div className="col-md-9">
                            <div className='d-flex flex-column gap-3 commercial'>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            value={0}
                                            checked={info?.directionType === 0}
                                            onClick={e => seterRadio(e)}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Административная деятельность</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 1}
                                            onClick={e => seterRadio(e)}
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Гостиничный бизнес и общественное питание</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 2}
                                            onClick={e => seterRadio(e)}
                                            value={2}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Информация и связь</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 3}
                                            onClick={e => seterRadio(e)}
                                            value={3}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Обрабатывающие производства</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 4}
                                            onClick={e => seterRadio(e)}
                                            value={4}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Строительство</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 5}
                                            onClick={e => seterRadio(e)}
                                            value={5}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Водоотведение, водоснабжение, утилизация и сбор отходов, ликвидация различного рода загрязнений</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 6}
                                            onClick={e => seterRadio(e)}
                                            value={6}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Домашние хозяйства</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 7}
                                            onClick={e => seterRadio(e)}
                                            value={7}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Лесное и сельское хозяйство, рыбоводство, рыболовство, охота</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 8}
                                            onClick={e => seterRadio(e)}
                                            value={8}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Образование</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 9}
                                            onClick={e => seterRadio(e)}
                                            value={9}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Торговля (опт и розница), а также ремонт автомобилей и мотоциклов</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 10}
                                            onClick={e => seterRadio(e)}
                                            value={10}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span
                                            className="fs-11 ms-2">Военная безопасность, соцобеспечение, госуправление</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 11}
                                            onClick={e => seterRadio(e)}
                                            value={11}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Другие услуги</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 12}
                                            onClick={e => seterRadio(e)}
                                            value={12}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span
                                            className="fs-11 ms-2">Научная, техническая, профессиональная деятельность</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 13}
                                            onClick={e => seterRadio(e)}
                                            value={13}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Операции с недвижимостью</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 14}
                                            onClick={e => seterRadio(e)}
                                            value={14}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Финансы и страхование</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 15}
                                            onClick={e => seterRadio(e)}
                                            value={15}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span
                                            className="fs-11 ms-2">Все, что связано с добычей полезных ископаемых</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 16}
                                            onClick={e => seterRadio(e)}
                                            value={16}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Здравоохранение</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 17}
                                            onClick={e => seterRadio(e)}
                                            value={17}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Обеспечение газом, паром, энергией, кондиционирование</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 18}
                                            onClick={e => seterRadio(e)}
                                            value={18}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Спорт, культура, досуг, развлечения</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='directionType'
                                            checked={info?.directionType === 19}
                                            onClick={e => seterRadio(e)}
                                            value={19}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Хранение и транспортировка</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="d-none d-md-block my-4"/>
                    <div className="row">
                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                            <span data-for="rental-type" data-status={false}>Вентиляция:</span>
                        </div>
                        <div className="col-md-9">
                            <div className='row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3'>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasVentilation'
                                            checked={info?.hasVentilation === 1}
                                            onClick={e => seterRadio(e)}
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Есть</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasVentilation'
                                            checked={info?.hasVentilation === 0}
                                            onClick={e => seterRadio(e)}
                                            value={0}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="d-none d-md-block my-4"/>
                    <div className="row">
                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                            <span data-for="rental-type" data-status={false}>Пожарная сигнализация:</span>
                        </div>
                        <div className="col-md-9">
                            <div className='row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3'>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasFireAlarm'
                                            checked={info?.hasFireAlarm === 1}
                                            onClick={e => seterRadio(e)}
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Есть</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasFireAlarm'
                                            checked={info?.hasFireAlarm === 0}
                                            onClick={e => seterRadio(e)}
                                            value={0}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="d-none d-md-block my-4"/>
                    <div className="row">
                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                            <span data-for="rental-type" data-status={false}>Охранная сигнализация:</span>
                        </div>
                        <div className="col-md-9">
                            <div className='row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3'>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasSecurityAlarm'
                                            checked={info?.hasSecurityAlarm === 1}
                                            onClick={e => seterRadio(e)}
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Есть</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='hasSecurityAlarm'
                                            checked={info?.hasSecurityAlarm === 0}
                                            onClick={e => seterRadio(e)}
                                            value={0}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="d-none d-md-block my-4"/>
                    <div className="row">
                        <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">
                            <span data-for="rental-type" data-status={false}>Класс:</span>
                        </div>
                        <div className="col-md-9">
                            <div className='row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3'>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 0}
                                            onClick={e => seterRadio(e)}
                                            value={0}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">A</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 1}
                                            onClick={e => seterRadio(e)}
                                            value={1}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">A+</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 2}
                                            onClick={e => seterRadio(e)}
                                            value={2}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">B</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 3}
                                            onClick={e => seterRadio(e)}
                                            value={3}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">B+</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 4}
                                            onClick={e => seterRadio(e)}
                                            value={4}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">C</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type='radio'
                                            name='gradeType'
                                            checked={info?.gradeType === 5}
                                            onClick={e => seterRadio(e)}
                                            value={5}
                                            onChange={(e) => onChange(e)}
                                        />
                                        <span className="fs-11 ms-2">D</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </>
    );
};

export default AdTypeCommercial;