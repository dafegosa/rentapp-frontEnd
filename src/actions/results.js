import axios from 'axios'
import { SET_USER } from '../utils/constants'
export const setUser = (user) => ({
  type: SET_USER,
  user,
})
export const createUser = (email, password) => {
  return async (dispatch) => {
    console.log('BUENASSS')
    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'user/signup',
        data: {
          email,
          password,
        },
      })
      localStorage.setItem('token', data.token)
      dispatch(setUser(data))
    } catch (err) {}
  }
}
