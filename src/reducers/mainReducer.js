import {
  FIND_ITEMS,
  ADD_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  DEL_EVENT
} from 'actions/actionTypes'

const initialState = {
  events: []
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EVENT: {
      localStorage.setItem('events', JSON.stringify([...state.events
        .filter(event => event.id !== action.event.id), action.event]))
      return {
        ...state,
        events: [...state.events.filter(event => event.id !== action.event.id), action.event]
      }
    }

    case ADD_EVENT: {
      localStorage.setItem('events', JSON.stringify([...state.events, action.event]))
      return {
        ...state,
        events: [...state.events, action.event]
      }
    }

    case DEL_EVENT: {
      localStorage.setItem('events', JSON.stringify([...state.events.filter(event => event.id !== action.id)]))
      return {
        ...state,
        events: [...state.events.filter(event => event.id !== action.id)]
      }
    }

    case GET_EVENTS: {
      return {
        ...state,
        events: action.events
      }
    }

    case FIND_ITEMS: {
      if (action.text === '')
        return {
          ...state,
          events: JSON.parse(localStorage.getItem('events'))
        }
      let res = [];
      JSON.parse(localStorage.getItem('events')).forEach(obj => {
        Object.keys(obj).forEach(key => {
          if (key === 'id') return;

          if (key === 'date') {
            let day, month;
            new Date(obj[key]).getDate() < 10
              ? day = '0' + (new Date(obj[key]).getDate() + '')
              : day = new Date(obj[key]).getDate() + ''

            new Date(obj[key]).getMonth() + 1 < 10
              ? month = '0' + (new Date(obj[key]).getMonth() + 1 + '')
              : month = new Date(obj[key]).getMonth() + 1 + ''

            const date = day + '/' + month + '/' + (new Date(obj[key]).getFullYear() + '')

            if (date.includes(action.text)) {
              res = res.filter(item => item.id !== obj.id)
              res.push(obj)
            }
          }
          if (key === 'text') {
            if (obj[key].toLowerCase().includes(action.text.toLowerCase())) {
              res = res.filter(item => item.id !== obj.id)
              res.push(obj)
            }
          }
        })
      })

      return {
        ...state,
        events: res
      }
    }

    default:
      return state
  }
}

export default mainReducer