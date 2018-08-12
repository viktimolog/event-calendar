import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import DatePicker from 'components/DatePicker';
import { TextConstants } from 'constants/TextConstants';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 150,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
});

class ModalDialogDatePicker extends React.Component {
    state = {
        open: false,
        date: Date.now(),
        newNameEvent: ''
    };

    handleNewEvent = e => this.setState({ newNameEvent: e.target.value });

    handleDate = date => this.setState({ date });

    handleOK = () => {
        if (isNaN(this.state.date)) {
            alert(TextConstants.PLEASECHOICEDATE);
            return;
        }

        if (this.state.newNameEvent.trim() === '') {
            alert(TextConstants.PLEASEINPUTEVENT);
            return;
        }

        const newEvent = {
            id: Date.now(),
            date: this.state.date,
            text: this.state.newNameEvent
        }
        this.props.addEvent(newEvent);
        this.handleClose();
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, newNameEvent: '' });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpen}>
                    {TextConstants.ADD}
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', fontSize: '16px', color: 'blue' }}>
                            {TextConstants.WINDOWADDNEWEVENT}
                        </div>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <DatePicker
                                                label={TextConstants.CHOICEDATE}
                                                handleDate={this.handleDate}
                                                date={Date.now()}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Input
                                                style={{ display: 'flex', width: '90%', marginTop: '17px' }}
                                                placeholder={TextConstants.INPUTEVENT}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'Description',
                                                    value: this.state.newNameEvent,
                                                    onChange: this.handleNewEvent,
                                                    autoFocus: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Button
                                                variant="contained"
                                                style={{ display: 'flex', width: '90%', justifyContent: 'center', marginTop: '10px' }}
                                                color="primary"
                                                onClick={this.handleOK}>
                                                {TextConstants.ADD}
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2}>
                                            <Button
                                                variant="contained"
                                                style={{ display: 'flex', width: '90%', justifyContent: 'center', marginTop: '10px' }}
                                                color="secondary"
                                                onClick={this.handleClose}>
                                                {TextConstants.EXIT}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalDialogDatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    addEvent: PropTypes.func.isRequired
};

export default withStyles(styles)(ModalDialogDatePicker);
