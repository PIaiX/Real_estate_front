import {getDefaultValue} from '../helpers';

export default {
    DADATA_TOKEN: getDefaultValue(process.env.REACT_APP_DADATA_TOKEN, '0000'),
    YMAPS_TOKEN: getDefaultValue(process.env.REACT_APP_YMAPS_TOKEN, '0000')
}