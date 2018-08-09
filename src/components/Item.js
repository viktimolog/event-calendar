import React from 'react'
import PropTypes from 'prop-types'
import { TextConstants } from 'constants/TextConstants';
import Event from 'components/Event';

const styleToday = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px',
  background: 'blue',
  borderRadius: '20px',
  color: 'white'
}

const styleNotToday = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px'
}

const style1 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  // height: '30px'
}

const getDate = value => {
  const dateFormat = require('dateformat');
  // const date = dateFormat(value, 'ddd mmm d yyyy');
  const date = dateFormat(value, 'd');
  return date;
};

const OneItem = ({ item, events }) => {

  const isDate = (eventDate, item) => {
    if ((new Date(eventDate).getFullYear() === new Date(item).getFullYear())
      && (new Date(eventDate).getMonth() === new Date(item).getMonth())
      && (new Date(eventDate).getDate() === new Date(item).getDate()))
      return true;
    return false;
  }

  // if ((new Date().getFullYear() === new Date(item).getFullYear())
  //   && (new Date().getMonth() === new Date(item).getMonth())
  //   && (new Date().getDate() === new Date(item).getDate()))

  if (isDate(Date.now(), item))
    return (
      <div style={styleToday}>
        {
          new Date(item).getDate() === 1
            ? getDate(item) + TextConstants.SMALLMONTHS[new Date(item).getMonth()]
            : getDate(item)
        }
      </div>
    )
  return (
    <div>
      <div style={styleNotToday}>
        {
          new Date(item).getDate() === 1
            ? getDate(item) + TextConstants.SMALLMONTHS[new Date(item).getMonth()]
            : getDate(item)
        }
      </div>
      {/* <div style={style1}> */}
      <div>
      {
        events.filter(event => isDate(event.date, item))
          .map(event =>
            <Event event={event} />
          )
      }
    </div>
    </div>
  )
}

OneItem.propTypes = {
  item: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired
}

export default OneItem;
