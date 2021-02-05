import axios from 'axios'
import { SET_USER } from '../utils/constants'
export const setUser = (user) => ({
  type: SET_USER,
  user,
})
export const createUser = (email, password, history, closeModal, login) => {
  return async (dispatch) => {
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
      localStorage.setItem('uName', data.user.email)
      dispatch(setUser(data.user))
      closeModal()
      history.push('/home')
      login()
    } catch (err) {}
  }
}
export const loginUser = (email, password, history, login) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'user/signin',
        data: {
          email,
          password,
        },
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('uName', data.user.email)
      dispatch(setUser(data.user))
      history.push('/home')
      login()
    } catch (err) {}
  }
}

export const createElement = (
  name,
  model,
  price,
  description,
  category,
  subCategory,
  userId
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'element/new',
        data: {
          name,
          model,
          price,
          description,
          category,
          subCategory,
          rented: false,
          available: true,
          owner: userId,
          iHaveIt: 'nn',
        },
      })
      console.log('DataElement => ', data.element)
      // dispatch(setUser(data.user))
    } catch (err) {}
  }
}
