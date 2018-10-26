import axios from 'axios'

export function getSpeeches (config = {}) {
  return axios.get('/speech',{
    baseURL: 'http://localhost:7001'
  })
}
