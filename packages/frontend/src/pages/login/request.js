import axios from 'axios'

export function loginReq(data) {
  return axios.post('/login', {data}, {
    baseURL: 'http://localhost:7001'
  })
}
