import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const getDate = value => {
    const dateFormat = require('dateformat');
    const date = dateFormat(value, 'HH:mm');
    return date;
};

const Event = ({ event }) => {
    return (
        <div>
        <Button
            style={{ margin: 5 }}
            size="small"
            color="primary"
            variant="contained"
            onClick={() => alert('ModalWindow for edit')}
        >
            {getDate(event.date) + ' ' + event.text}
        </Button>
        </div>
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}

export default Event;