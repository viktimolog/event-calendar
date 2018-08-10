import {
  FIND_ITEMS,
  GET_ITEMS,
  SET_CURITEM,
  ADD_EVENT,
  EDIT_EVENT
} from 'actions/actionTypes'

//30/07 and 31/07
//[1532898000000, 1532984400000, 1533070800000, 1533157200000, 1533243600000, 1533330000000, 1533416400000, 1533502800000, 1533589200000, 1533675600000, 1533762000000, 1533848400000, 1533934800000, 1534021200000, 1534107600000, 1534194000000, 1534280400000, 1534366800000, 1534453200000, 1534539600000, 1534626000000, 1534712400000, 1534798800000, 1534885200000, 1534971600000, 1535058000000, 1535144400000, 1535230800000, 1535317200000, 1535403600000, 1535490000000, 1535576400000, 1535662800000, 1535749200000, 1535835600000, 1535922000000, 1536008400000, 1536094800000, 1536181200000, 1536267600000, 1536354000000, 1536440400000]

const initialState = {
  items: [],
  curItem: false,
  events: [
    {
      id: 0,
      date: 1532898000000,
      text: 'event 1 30/07/18'
    },
    {
      id: 1,
      date: 1532898001000,
      text: 'event 2 30/07/18'
    },
    {
      id: 2,
      date: 1533070800000,
      text: 'event 01/08/18'
    },
  ]
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EVENT: {
      return {
        ...state,
        events: [...state.events.filter(event => event.id !== action.event.id), action.event]
      }
    }

    case ADD_EVENT: {
      return {
        ...state,
        events: [...state.events, action.event]
      }
    }

    case GET_ITEMS: {
      return {
        ...state,
        items: action.month
      }
    }

    case SET_CURITEM: {
      return {
        ...state,
        curItem: action.curItem
      }
    }

    case FIND_ITEMS: {
      if (action.text === '')
        return {
          ...state,
          items: action.data
        }

      let arr = []
      action.data.forEach(obj => {
        for (let k in obj) {
          const curObj = obj[k]
          if (k === 'general') {
            if (Object.values(curObj).slice(0, -1).join(' ').toLowerCase().includes(action.text.toLowerCase())) {
              arr.push(obj)
              break
            }
          } else if (Object.values(curObj).join(' ').toLowerCase().includes(action.text.toLowerCase())) {
            arr.push(obj)
            break
          }
        }
      })

      return {
        ...state,
        items: arr
      }
    }

    default:
      return state
  }
}

export default mainReducer