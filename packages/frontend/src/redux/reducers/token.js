import {
  NEW_TOKEN,
  SIGN_OUT
} from '../actionTypes'

const initialState = {
  value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDU4NTIyIiwiaWF0IjoxNTQxMDQ4NTI1LCJleHAiOjE1NDI4NDg1MjV9.50yfJ7QNpKr6ydgPeppdq1p-mddAwoeGKF-COxOUFK0',
  isLogin: true,
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
