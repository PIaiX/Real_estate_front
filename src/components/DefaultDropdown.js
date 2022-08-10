import React, {useEffect, useRef} from 'react';
import Loader from '../components/Loader';

const DefaultDropdown = ({options, onSelectItem, closeDropdown, onScroll, isFetching, isShow}) => {
    const ref = useRef(null)

    const DropdownItem = ({item}) => (
        <label className="radio-line">
            <input
                type="radio"
                value={item.value}
                onClick={closeDropdown}
                onChange={() => onSelectItem(item.title, item.value)}
            />
            <div>{item.title}</div>
        </label>
    )

    useEffect(() => {
        if (isShow && ref) {
            ref.current.scrollTop = 0
        }
    }, [isShow, ref])

    return (
        <div className="dropdown-list__inner" onScroll={onScroll} ref={ref}>
            {
                options?.length
                    ? options.map((item, index) => <DropdownItem key={index} item={item}/>)
                    : <div className='p-2'>Нет доступных значений</div>

            }
            {isFetching && <div className="d-flex justify-content-center p-2"><Loader color='#545454'/></div>}
        </div>
    )
}

export default DefaultDropdown;