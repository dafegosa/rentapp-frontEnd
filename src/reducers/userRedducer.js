import { SET_USER } from '../utils/constants'
const userReducer = (state = { email: '' }, action) => {
  console.log('EL ACTION', action.user)
  switch (action.type) {
    case SET_USER:
      state.email = action.user.email
      return state
    default:
      return state
  }
}

export default userReducer
