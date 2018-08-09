import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import OneItem from './Item'

const Items = ({items, setCurItem}) => (
  <div style={{display: 'flex', width: '100%', height: '1000px'}}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Пн</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Вт</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Ср</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Чт</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Пт</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Сб</TableCell>
          <TableCell component="th" scope="row"
                     style={{color: 'blue', fontSize: '16px'}}>Вс</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {items.slice(0, 7).map(item =>
            <TableCell component="th" scope="row">
              <OneItem
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

export default Items

Items.propTypes = {
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired
}