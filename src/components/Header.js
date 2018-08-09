import React from 'react'
import PropTypes from 'prop-types'
// import { Item } from 'semantic-ui-react'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { TextConstants } from 'constants/TextConstants';
import Search from 'components/Search';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    }
});

function Header(props) {
    const { classes } = props;
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
            <div style={{ display: 'flex', width: '40%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button color="primary" style={{ fontSize: '16px' }}
                >
                    {TextConstants.TODAY}
                </Button>
                <IconButton color="primary" onClick={() => { alert('onClick Left') }}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton color="primary" onClick={() => { alert('onClick Right') }}
                >
                    <ChevronRight />
                </IconButton>
                <Button color="primary" style={{ fontSize: '16px' }}
                >
                   Пока июнь 2018
                </Button>
            </div>
            <div style={{ display: 'flex', width: '60%', justifyContent: 'flex-end', alignItems: 'center', marginRight: '20px' }}>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => { alert('onClick Add') }}>
                    {TextConstants.ADD}
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => { alert('onClick Update') }}>
                    {TextConstants.UPDATE}
                </Button>
                <Search/>
            </div>
        </div>
    )
}

Header.propTypes = {
    findItems: PropTypes.func.isRequired
}

// export default Header

export default withStyles(styles)(Header);