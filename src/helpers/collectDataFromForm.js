export const onSelectHandler = (value, stateProp, setFunction) => {
    if (stateProp) {
        setFunction(prevValues => ({...prevValues, [stateProp]: value}))
    } else {
        setFunction(value)
    }
}

export const onInputHandler = (e, stateProp, isDigit = false, setFunction) => {
    const text = e.target.value.trim()

    setFunction(prevValues => ({...prevValues, [stateProp]: isDigit ? +text : text}))
}

export const onCheckboxHandler = (e, setFunction) => {
    const name = e.target.name

    setFunction(prevValues => ({...prevValues, [name]: !prevValues[name]}));
}

export const onMultiCheckboxHandler = (array, number, setFunction) => {
    setFunction(prevValues => {
        if(prevValues[array]) {
            return {
                ...prevValues,
                [array]: prevValues[array]?.includes(number)
                    ? prevValues[array].filter(item => item !== number)
                    : prevValues[array].concat(number)
            }
        } else {
            return {
                ...prevValues,
                [array]: [number]
            }
        }

    })
}

export const onSingleParamQuery = (stateProp, value, setFunction, initialState) => {
    setFunction({
        ...initialState,
        [stateProp]: value
    })
}