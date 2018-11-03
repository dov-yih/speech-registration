import {
  ADD_USER,
  ADD_SNO,
  NEW_TOKEN,
  SIGN_OUT,
  USER_LOGIN,
} from '../actionTypes'

const initialState = {
  sNo: '16058522',
  name: '',
  avatar: '',
  isLogin: true,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MDU4NTIyIiwiaWF0IjoxNTQxMDQ4NTI1LCJleHAiOjE1NDI4NDg1MjV9.50yfJ7QNpKr6ydgPeppdq1p-mddAwoeGKF-COxOUFK0',
}

export default function (state = initialState, action) {
  switch (action.type) {
  case USER_LOGIN:
  {
    const {
      sNo,
      token,
    } = action.payload
    return {
      ...state,
      isLogin: true,
      sNo,
      token
    }
  }
  case ADD_USER:
  {
    const {
      sNo,
      name,
      avatar
    } = action.payload
    return {
      ...state,
      sNo,
      name,
      avatar
    }
  }
  case ADD_SNO:
  {
    const {sNo} = action.payload
    return {
      ...state,
      sNo,
    }
  }
   case NEW_TOKEN: {
     const {
       token
     } = action.payload
     return {
       ...state,
       value: token,
       isLogin: true,
     }
   }
   case SIGN_OUT: {
     return {
       value: '',
       isLogin: false
     }
   }
  default:
    return state
  }
}
