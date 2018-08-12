import {
  FIND_ITEMS,
  ADD_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  DEL_EVENT
} from './actionTypes'

export const editEvent = event => dispatch => {
  dispatch({
    type: EDIT_EVENT,
    event
  })
}

export const addEvent = event => dispatch => {
  dispatch({
    type: ADD_EVENT,
    event
  })
}

export const delEvent = id => dispatch => {
  dispatch({
    type: DEL_EVENT,
    id
  })
}

export const getEvents = () => dispatch => {
  let events = [];
  if (localStorage.getItem('events')) {
    events = JSON.parse(localStorage.getItem('events'))
  }
  dispatch({
    type: GET_EVENTS,
    events
  })
}

export const findItems = text => dispatch => {
  dispatch({
    type: FIND_ITEMS,
    text
  })
}