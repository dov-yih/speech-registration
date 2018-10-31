import { SIGN_OUT, NEW_TOKEN,ADD_USER,ADD_SNO} from "./actionTypes";

let Token = ''
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
  console.log(sNo)
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
