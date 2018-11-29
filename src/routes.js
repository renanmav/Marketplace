const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const AdController = require('./app/controllers/AdController')
const PurchaseController = require('./app/controllers/PurchaseController')

const UserValidator = require('./app/validators/User')
const SessionValidator = require('./app/validators/Session')
const AdValidator = require('./app/validators/Ad')
const PurchaseValidator = require('./app/validators/Purchase')

routes.post('/users', validate(UserValidator), handle(UserController.store))
routes.post(
  '/sessions',
  validate(SessionValidator),
  handle(SessionController.store)
)

routes.use(authMiddleware)

// ADS

routes.get('/ads', handle(AdController.index))
routes.get('/ads/:id', handle(AdController.show))
routes.post('/ads', validate(AdValidator), handle(AdController.store))
routes.put('/ads/:id', validate(AdValidator), handle(AdController.update))
routes.delete('/ads/:id', validate(AdValidator), handle(AdController.destroy))

// PURCHASE

routes.post(
  '/purchases',
  validate(PurchaseValidator),
  handle(PurchaseController.store)
)

module.exports = routes
