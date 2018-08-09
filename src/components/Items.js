import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import OneItem from './Item'

const styleHead = {
  color: 'blue',
  fontSize: '16px'
}

const getDate = value => {
  const dateFormat = require('dateformat');
  // const date = dateFormat(value, 'ddd mmm d yyyy');
  const date = dateFormat(value, 'd');
  return date;
};

const Items = ({ events, items, setCurItem }) => {

  console.log('events = ', events)//ok

  console.log('events date[0] = ', new Date(events[0].date).getDate())

  console.log('events getDate(item) = ', getDate(items[0]))

  // alert(new Date(events[0].date).getDate() === getDate(items[0]))//false

  //ok равны



  // events={events.filter(event => new Date(event.date).getDate() === getDate(item))}

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row"
              style={styleHead}>Пн</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Вт</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Ср</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Чт</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Пт</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Сб</TableCell>
            <TableCell component="th" scope="row"
              style={styleHead}>Вс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {items.slice(0, 7).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {items.slice(7, 14).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {items.slice(14, 21).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {items.slice(21, 28).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {items.slice(28, 35).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            {items.slice(35, 42).map(item =>
              <TableCell component="th" scope="row">
                <OneItem
                  events={events}
                  item={item}
                  setCurItem={() => setCurItem(item)}
                />
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Items

Items.propTypes = {
  items: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired
}