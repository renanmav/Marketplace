const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const AdController = require('./app/controllers/AdController')
const PurchaseController = require('./app/controllers/PurchaseController')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

// ADS

routes.get('/ads', AdController.index)
routes.get('/ads/:id', AdController.show)
routes.post('/ads', AdController.store)
routes.put('/ads/:id', AdController.update)
routes.delete('/ads/:id', AdController.destroy)

// PURCHASE

routes.post('/purchases', PurchaseController.store)

module.exports = routes
