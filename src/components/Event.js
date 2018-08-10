import React from 'react'
import PropTypes from 'prop-types'
import ModalDialogEditEvent from 'components/ModalDialogEditEvent';

const Event = ({ event, editEvent }) => {
    return (
        <ModalDialogEditEvent
            event={event}
            editEvent={editEvent}
        />
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    editEvent: PropTypes.func.isRequired
}

export default Event;