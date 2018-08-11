import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconSearch from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import { TextConstants } from 'constants/TextConstants';

const styles = theme => ({
  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  // margin: {
  //   margin: theme.spacing.unit,
  // },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  margin: {
    margin: theme.spacing.unit,
  }
});

class Search extends React.Component {
  state = { text: '' }

  handleTextChange = event => {
    this.setState({
      text: event.target.value.trim()
    })
    // this.props.findItems(event.target.value.trim())
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{display: 'flex', justifyItems: 'center'}}>
        <IconSearch />
        <TextField
          placeholder={TextConstants.PLACEHOLDERSEARCH}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
              value: this.state.text,
              onChange: this.handleTextChange
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
        />
      </div>
      //      <div className={classes.margin}>
      //      <Grid container spacing={8} alignItems="flex-end">
      //        <Grid item>
      //          <IconSearch />
      //        </Grid>
      //        <Grid item>
      //          <TextField id="input-with-icon-grid" label="With a grid" />
      //        </Grid>
      //      </Grid>
      //    </div>
      //  </div>
    )
  }
}

export default withStyles(styles)(Search);






// import React from 'react'
// import { Input } from 'semantic-ui-react'
// import { TextConstants } from 'constants/TextConstants';

// export default class Search extends React.Component {
//   state = {text: ''}

//   handleTextChange = event => {
//     this.setState({
//       text: event.target.value.trim()
//     })
//     // this.props.findItems(event.target.value.trim())
//   }

//   render () {
//     return (
//       <Input
//         style={{marginLeft: '40px'}}
//         icon='search'
//         value={this.state.text}
//         placeholder={TextConstants.PLACEHOLDERSEARCH}
//         onChange={this.handleTextChange}
//       />
//     )      
//   }
// }


