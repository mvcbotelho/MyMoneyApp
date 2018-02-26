const express = require('express')

module.exports = function(server){
  //URL Base de todas as rotas
  const router = express.Router()
  server.use('/api', router)

  //Rotas de pagamento
  const BillingCycles = require('../api/billingCycle/billingCycleService')
  BillingCycles.register(router, '/billingCycles')
}