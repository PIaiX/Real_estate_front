const getDateUI = (initialDate, mode) => {
    if (initialDate) {
        const date = new Date(initialDate)

        switch (mode) {

            case 'short-md':
                return date.toLocaleDateString('ru', {
                    month: 'short',
                    day: '2-digit'
                })
            default:
                return date.toLocaleDateString('ru', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })
        }
    } else {
        return null
    }
}

const checkDateForConversation = (initialDate) => {
    if (initialDate) {
        const date = new Date(initialDate)
        const now = new Date(Date.now())

        if (date.getFullYear() === now.getFullYear()) {
            if (getDateUI(date) === getDateUI(now)) {
                return getDateUI(date, 'short-md')
            }

            return getDateUI(date, 'short-md')
        } else {
            return getDateUI(date)
        }
    } else {
        return null
    }
}

const getTimeUI = (initialTime, serverFormat = false) => {
    if (initialTime) {
        if (serverFormat) {
            const date = new Date(initialTime)

            return date.toLocaleTimeString('ru', {
                hour: '2-digit',
                minute: '2-digit'
            })
        } else {
            // initialTime = hour:minutes:seconds (string)
            const temp = initialTime.split(':')
            const date = new Date(Date.now())

            if (temp?.length === 3) {
                date.setHours(temp[0]);
                date.setMinutes(temp[1]);
                date.setSeconds(temp[2]);

                return date.toLocaleTimeString('ru', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }
        }
    } else {
        return null
    }
}

export {getDateUI, getTimeUI, checkDateForConversation};