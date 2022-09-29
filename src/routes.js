const { Router } = require('express')

const BeneficiaryController = require('./app/controllers/beneficiaryController.js')

const routes = new Router()

routes.post('/v1/beneficiary', BeneficiaryController.saveBeneficiary)

module.exports = routes
