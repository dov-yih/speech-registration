import axios from 'axios'

export function getUser(id) {
  return axios.get('/user/' + id, {
    baseURL: 'http://localhost:7001'
  })
}
