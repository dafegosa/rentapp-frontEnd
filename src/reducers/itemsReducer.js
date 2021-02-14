import { SET_ITEM, SET_ITEMS } from '../utils/constants'
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ITEM:
      state = [...state, action.item]
      return state
    case SET_ITEMS:
      state = action.items
      return state
    default:
      return state
  }
}

export default itemsReducer
