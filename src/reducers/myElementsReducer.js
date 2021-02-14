import { SET_MYELEMENTS } from '../utils/constants'
const myElementsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MYELEMENTS:
      return action.elements
    default:
      return state
  }
}

export default myElementsReducer
