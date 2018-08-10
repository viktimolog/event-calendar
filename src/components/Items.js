import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import OneItem from './Item';

const styleHead = {
  color: 'blue',
  fontSize: '16px'
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    maxWidth: 2000,
  },
  cell: {
    maxWidth: 20,
    // maxHeight: 20
  }
});

const Items = ({ classes, delEvent, editEvent, events, items }) => (
  <div style={{ display: 'flex', width: '100%' }}>
    <Table className={classes.table}>
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
            <TableCell component="th" scope="row" className={classes.cell}>
              <OneItem
                events={events}
                item={item}
                editEvent={editEvent}
                delEvent={delEvent}
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
                editEvent={editEvent}
                delEvent={delEvent}
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
                editEvent={editEvent}
                delEvent={delEvent}
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
                editEvent={editEvent}
                delEvent={delEvent}
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
                editEvent={editEvent}
                delEvent={delEvent}
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
                editEvent={editEvent}
                delEvent={delEvent}
              />
            </TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

// export default Items
export default withStyles(styles)(Items);

Items.propTypes = {
  items: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  editEvent: PropTypes.func.isRequired,
  delEvent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}