import { SET_ITEM } from '../utils/constants'
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ITEM:
      state = [...state, action.item]
      return state
    default:
      return state
  }
}

export default itemsReducer
