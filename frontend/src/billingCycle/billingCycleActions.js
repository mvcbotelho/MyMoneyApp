import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export function getList () {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  } 
}

export function create (value) {
  axios.post(`${BASE_URL}/billingCycles`, value)
  .then(resp => {
    toastr.success('Sucesso', 'Operação realizada com sucesso!')
  })
  .catch(e => {
    e.response.data.errors.forEach(error => toastr.error('Erro', error))
  })
  return {
    type: 'TEMP'
  }
}

export function update (value, id) {
 const update = axios.put(`${BASE_URL}/billingCycles/:id`, value, id)
 return {
   type: 'TEMP'
 }
}

export function exclude (value, id) {
  const exclude = axios.delete(`${BASE_URL}/billingCycles/:id`, value, id)
}