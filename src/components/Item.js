import React from 'react'
import PropTypes from 'prop-types'
import { TextConstants } from 'constants/TextConstants';
import Event from 'components/Event';

const styleToday = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '35px',
  height: '35px',
  background: 'blue',
  borderRadius: '35px',
  color: 'white'
}

const getDate = value => {
  const dateFormat = require('dateformat');
  const date = dateFormat(value, 'd');
  return date;
};

const Item = ({ j, i, delEvent, item, events, editEvent }) => {
  const isDate = (eventDate, item) => {
    if ((new Date(eventDate).getFullYear() === new Date(item).getFullYear())
      && (new Date(eventDate).getMonth() === new Date(item).getMonth())
      && (new Date(eventDate).getDate() === new Date(item).getDate()))
      return true;
    return false;
  }

  const curStyle = isDate(Date.now(), item)
    ? styleToday
    : null

  return (
    <div>
      {
        j < 7 && <div style={{ marginBottom: 5, marginTop: 5 }}>{TextConstants.DAYSOFWEEK[i]}</div>
      }
      <div style={curStyle}>
        {
          new Date(item).getDate() === 1
            ? getDate(item) + TextConstants.SMALLMONTHS[new Date(item).getMonth()]
            : getDate(item)
        }
      </div>
      <div>
        {
          events.filter(event => isDate(event.date, item))
            .map(event =>
              <Event
                i={i}
                key={event.id}
                event={event}
                editEvent={editEvent}
                delEvent={delEvent}
              />
            )
        }
      </div>
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.number.isRequired,
  events: PropTypes.array.isRequired,
  editEvent: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired
}

export default Item;
