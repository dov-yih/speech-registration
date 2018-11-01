import {
  ADD_USER,
  ADD_SNO
} from '../actionTypes'

const initialState = {
  sNo: '16058522',
  name: '',
  avatar: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_USER:
  {
    const {
      sNo,
      name,
      avatar
    } = action.payload
    return {
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
  default:
    return state
  }
}
