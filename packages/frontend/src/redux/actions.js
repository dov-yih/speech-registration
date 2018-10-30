import { SIGN_OUT, NEW_TOKEN} from "./actionTypes";

let Token = ''
export const newToken = token => ({
  type: NEW_TOKEN,
  payload: {
    token
  }
})

export const isLogin = () => {
  console.log(Token)
  return {
  type: SIGNOUT
}}
