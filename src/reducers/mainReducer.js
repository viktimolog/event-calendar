import {
  FIND_ITEMS,
  ADD_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  DEL_EVENT
} from 'actions/actionTypes'

//30/07 and 31/07
//[1532898000000, 1532984400000, 1533070800000, 1533157200000, 1533243600000, 1533330000000, 1533416400000, 1533502800000, 1533589200000, 1533675600000, 1533762000000, 1533848400000, 1533934800000, 1534021200000, 1534107600000, 1534194000000, 1534280400000, 1534366800000, 1534453200000, 1534539600000, 1534626000000, 1534712400000, 1534798800000, 1534885200000, 1534971600000, 1535058000000, 1535144400000, 1535230800000, 1535317200000, 1535403600000, 1535490000000, 1535576400000, 1535662800000, 1535749200000, 1535835600000, 1535922000000, 1536008400000, 1536094800000, 1536181200000, 1536267600000, 1536354000000, 1536440400000]

const initialState = {
  items: [],
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