import { SET_ELEMENTS } from '../utils/constants'
const elementsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ELEMENTS:
      return action.elements
    default:
      return state
  }
}

export default elementsReducer
