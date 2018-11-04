import { SIGN_OUT, NEW_TOKEN,ADD_USER,ADD_SNO, USER_LOGIN} from './actionTypes'

export const userLogin = (sNo, token) => ({
  type: USER_LOGIN,
  payload: {
    token,
    sNo,
  }
})
export const newToken = token => ({
  type: NEW_TOKEN,
  payload: {
    token
  }
})

export const signOut = () => {
  return {
    type: SIGN_OUT
  }}

export const addUser = (sNo = '',name='', avatar='') => {
  return {
    type: ADD_USER,
    payload: {
      sNo,
      name,
      avatar
    }
  }
}

export const addSNo = (sNo = '') => {
  return {
    type: ADD_SNO,
    payload: {
      sNo,
    }
  }
}
