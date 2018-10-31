import {
  ADD_USER,
  ADD_SNO
} from '../actionTypes'

const initialState = {
  sNo: '',
  name: '',
  avatar: '',
}

export default function (state = initialState, action) {
  console.log('usr action', action)
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
