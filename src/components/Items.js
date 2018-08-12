import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Item from './Item';

const styles = theme => ({
  table: {
    width: '100%',
    tableLayout: 'fixed',
    marginTop: '10px'
  },
  cell: {
    width: '189px',
    verticalAlign: 'top',
    height: '189px',
    border: '1px solid',
    borderColor: 'lightgray',
    marginTop: 0,
    padding: 5
  }
});

const arrI = [0, 7, 14, 21, 28, 35]

const Items = ({ classes, delEvent, editEvent, events, items }) => (
  <div style={{ display: 'flex', width: '100%' }}>
    <Table className={classes.table}>
      <TableBody>
        {arrI.map((j, index) =>
          <TableRow key={index}>
            {
              items.slice(j, j + 7).map((item, i) => {
                // if (j === 35 && new Date(item).getDate() < 24) return null
                return (
                  <TableCell
                    key={i}
                    component="th"
                    scope="row"
                    className={classes.cell}
                  >
                    <Item
                      j={j}
                      i={i}
                      key={i}
                      events={events}
                      item={item}
                      editEvent={editEvent}
                      delEvent={delEvent}
                    />
                  </TableCell>
                )
              }
              )
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
)
export default withStyles(styles)(Items);

Items.propTypes = {
  items: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  editEvent: PropTypes.func.isRequired,
  delEvent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}