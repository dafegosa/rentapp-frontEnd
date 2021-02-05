import { SET_USER } from '../utils/constants'
const userReducer = (state = { email: '', id: '' }, action) => {
  console.log('EL ACTION', action.user)
  switch (action.type) {
    case SET_USER:
      state.email = action.user.email
      state.id = action.user._id
      return state
    default:
      return state
  }
}

export default userReducer
