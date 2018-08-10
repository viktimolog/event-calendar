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

class ModalDialogEditEvent extends React.Component {

    state = {
        open: false,
        date: new Date(this.props.event.date),//nah
        newNameEvent: this.props.event.text
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

        const editEvent = {
            id: this.props.event.id,
            date: this.state.date,
            text: this.state.newNameEvent
        }
        this.props.editEvent(editEvent);
        this.handleClose();
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, newNameEvent: this.props.event.text});
    };

    render() {
        const { classes, event } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleOpen}>
                    {event.text}
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', fontSize: '16px', color: 'blue' }}>
                            {TextConstants.WINDOWEDITEVENT}
                        </div>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <DatePicker
                                                label={TextConstants.CHOICEDATE}
                                                handleDate={this.handleDate}
                                                // date={this.state.date}
                                                date={event.date}
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
                                                {TextConstants.EDIT}
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

ModalDialogEditEvent.propTypes = {
    classes: PropTypes.object.isRequired,
    addEvent: PropTypes.func.isRequired,
    editEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
};

export default withStyles(styles)(ModalDialogEditEvent);
