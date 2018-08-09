import Urls from '../constants/Urls'
import axios from 'axios'

//get All Clients
export const GetItems = () => {
  return axios.get(Urls.clients)
}
