import React, {useEffect} from 'react';
import {onSingleParamQuery} from '../helpers/collectDataFromForm';

const PopularQueries = ({initialFilters, setFilters}) => {
    return (
        <div
            className="popular-queries"
        >
            <div>Популярные запросы:</div>
            <button
                type="button"
                onClick={() => onSingleParamQuery('roomTypes', [0], setFilters, initialFilters)}
            >
                Студия
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('roomTypes', [1], setFilters, initialFilters)}
            >
                1 комнатная
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('roomTypes', [2], setFilters, initialFilters)}
            >
                2 комнатная
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('roomTypes', [3], setFilters, initialFilters)}
            >
                3 комнатная
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('hasFurniture', true, setFilters, initialFilters)}
            >
                С мебелью
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('hasFurniture', false, setFilters, initialFilters)}
            >
                Без мебели
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('elevatorTypes', [1, 2, 3], setFilters, initialFilters)}
            >
                Есть лифт
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('withPets', true, setFilters, initialFilters)}
            >
                Можно с животными
            </button>
            <button
                type="button"
                onClick={() => onSingleParamQuery('withKids', true, setFilters, initialFilters)}
            >
                Можно с детьми
            </button>
        </div>
    );
};

export default PopularQueries;