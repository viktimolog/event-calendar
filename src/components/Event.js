import React from 'react'
import PropTypes from 'prop-types'
import ModalDialogEditEvent from 'components/ModalDialogEditEvent';

const Event = ({ delEvent, event, editEvent }) => {
    return (
        <ModalDialogEditEvent
            event={event}
            editEvent={editEvent}
            delEvent={delEvent}
        />
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    editEvent: PropTypes.func.isRequired,
    delEvent: PropTypes.func.isRequired
}

export default Event;