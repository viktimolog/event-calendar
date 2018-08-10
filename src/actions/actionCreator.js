import {
  GET_ITEMS,
  SET_CURITEM,
  FIND_ITEMS,
  ADD_EVENT,
  EDIT_EVENT
} from './actionTypes'

import {
  GetItems
} from './axiosRequests'

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

export const getItems = month => dispatch => {
  dispatch({
    type: GET_ITEMS,
    month
  })
  // GetItems()
  //   .then(res => {
  //       dispatch({
  //         type: GET_ITEMS,
  //         payload: res.data
  //       })
  //     }
  //   )
  //   .catch(err => {
  //       console.log(err.toString())
  //       dispatch({
  //         type: GET_ITEMS,
  //         payload: []
  //       })
  //     }
  //   )
}

export const setCurItem = curItem => dispatch => {
  dispatch({
    type: SET_CURITEM,
    curItem
  })
}

export const findItems = text => dispatch => {
  GetItems()
    .then(res =>
      dispatch({
        type: FIND_ITEMS,
        data: res.data,
        text: text
      })
    )
    .catch(err => {
        console.log(err.toString())
        dispatch({
          type: GET_ITEMS,
          payload: []
        })
      }
    )
}