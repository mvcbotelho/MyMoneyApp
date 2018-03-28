import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(value) {
  return submit(value, 'post')
}

export function update(value){
  return submit(value, 'put')
}
export function remove(value){
  return submit(value, 'delete')
}

function submit(value, method) {
  return dispatch => {
    const id = value._id ? value._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, value)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function showDelete(billingCycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init (){
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITAL_VALUES)

  ]
}