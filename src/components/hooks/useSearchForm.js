import {useState} from 'react';
import {onSelectHandler} from '../utilities/collectDataFromForm';

const useSearchForm = (initialValue) => {
    const [search, setSearch] = useState(initialValue)

    const onSearch = (e, stateProp, setFunction) => {
        e.preventDefault()
        onSelectHandler(search.trim(), stateProp, setFunction)
    }
    return {search, setSearch, onSearch}
}

export default useSearchForm