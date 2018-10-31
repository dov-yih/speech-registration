import {
  NEW_TOKEN,
  SIGN_OUT
} from '../actionTypes'

const initialState = {
  value: '',
  isLogin: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TOKEN:
    {
      const {token} = action.payload
        return {
          // ...state,
          value: token,
          isLogin: true,
        }
      }
    case SIGN_OUT:
      {
        // console.log("GET_TOKEN", state)
        return {
          value: '',
          isLogin: false
        }
      }
    default:
      return state
  }
}
