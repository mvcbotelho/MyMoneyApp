import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getList () {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  } 
}

export function create (value) {
  const create = axios.post(`${BASE_URL}/billingCycles`, value)
  console.log(value)
  console.log(create)
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