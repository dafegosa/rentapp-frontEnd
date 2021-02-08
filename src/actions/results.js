import axios from 'axios'
import {
  SET_USER,
  SET_MYELEMENTS,
  SET_ELEMENTS,
  SET_SEARCHER,
} from '../utils/constants'
export const setUser = (user) => ({
  type: SET_USER,
  user,
})
export const setMyElements = (elements) => ({
  type: SET_MYELEMENTS,
  elements,
})
export const setElements = (elements) => ({
  type: SET_ELEMENTS,
  elements,
})
export const setSearcher = (searcher) => ({
  type: SET_SEARCHER,
  searcher,
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
  userId,
  img1
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
          img1,
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

export const myElementsList = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'element/myElementsList',
        data: {
          id,
        },
      })
      dispatch(setMyElements(data.data))
    } catch (err) {}
  }
}

export const elementsList = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: 'element/all',
      })
      dispatch(setElements(data.data))
      console.log('Todos los elementos => ', data.data)
    } catch (err) {}
  }
}
