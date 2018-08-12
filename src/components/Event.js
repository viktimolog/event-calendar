import React from 'react'
import PropTypes from 'prop-types'
import ModalDialogEditEvent from 'components/ModalDialogEditEvent';

const Event = ({ i, delEvent, event, editEvent }) => {
    return (
        <ModalDialogEditEvent
            i={i}
            event={event}
            editEvent={editEvent}
            delEvent={delEvent}
        />
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    editEvent: PropTypes.func.isRequired,
    delEvent: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired
}

export default Event;