import { SET_SEARCHER } from '../utils/constants'
const searchReducer = (state = { search: '', category: '' }, action) => {
  switch (action.type) {
    case SET_SEARCHER:
      state.search = action.searcher.search
      state.category = action.searcher.category
      return state
    default:
      return state
  }
}

export default searchReducer
