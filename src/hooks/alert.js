import {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert"

const useAlert = (delay) => {

    const [alertNode, setAlertNode] = useState(null)
    const submitAlert = useSelector(state => state?.alert)
    const dispatch = useDispatch()
    const {resetAlert} = bindActionCreators(alertActions, dispatch)

    useEffect(() => {
        setAlertNode(
            <Alert className='submit-alert' variant={submitAlert.variant} show={submitAlert.isShow}>
                {(submitAlert?.message?.length > 0) && submitAlert.message}
            </Alert>
        )

        if (submitAlert?.isShow) {
            const timeoutId = setTimeout(() => dispatch(resetAlert),delay)
            return () => clearTimeout(timeoutId)
        }

    }, [submitAlert])

    return {alertNode}
}

export default useAlert