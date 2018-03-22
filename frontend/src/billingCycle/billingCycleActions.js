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