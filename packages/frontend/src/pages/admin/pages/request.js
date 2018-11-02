import axios from 'axios'

export function getSpeeches(sNo) {
  return axios.get('/admin/speech',{
    baseURL: 'http://localhost:7001/'
  })
}
