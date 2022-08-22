import {useEffect, useState} from 'react';
import {Alert} from 'react-bootstrap';

const useAlert = (delay) => {
    const initialSubmitAlert = {
        variant: 'success',
        message: '',
        isShow: false
    }
    const [submitAlert, setSubmitAlert] = useState(initialSubmitAlert)

    const getAlertNode = () => <Alert className='submit-alert' variant={submitAlert.variant} show={submitAlert.isShow}>
        {(submitAlert?.message?.length > 0) && submitAlert.message}
    </Alert>

    useEffect(() => submitAlert.isShow && setTimeout(() => setSubmitAlert(initialSubmitAlert), delay), [submitAlert])

    return {setSubmitAlert, getAlertNode}
}

export default useAlert