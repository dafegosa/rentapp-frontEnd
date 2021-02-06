import { SET_MYELEMENTS } from '../utils/constants'
const myElementsReducer = (state = {}, action) => {
  console.log('MIS ELEMENTOS REDUCER=> ', action.elements)
  switch (action.type) {
    case SET_MYELEMENTS:
      return action.elements
    default:
      return state
  }
}

export default myElementsReducer
