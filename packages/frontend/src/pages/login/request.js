import axios from 'axios'

export function loginReq(encryptedStr) {
  return axios.post('/login', {data: encryptedStr}, {
    baseURL: 'http://localhost:7001'
  })
}
