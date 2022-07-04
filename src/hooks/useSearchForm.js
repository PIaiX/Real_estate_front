import {useState} from 'react';
import {onSelectHandler} from '../helpers/collectDataFromForm';

const useSearchForm = (initialValue) => {
    const [search, setSearch] = useState(initialValue)

    const onSearch = (e, stateProp, setFunction) => {
        e.preventDefault()
        onSelectHandler(search, stateProp, setFunction)
    }
    return {search, setSearch, onSearch}
}

export default useSearchForm