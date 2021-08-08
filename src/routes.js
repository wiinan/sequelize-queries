const express = require('express');
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router();

routes.post('/users', UserController.store)
routes.post('/users/:user_id/address', AddressController.store)
routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users', UserController.index)
routes.get('/users/:user_id/address', AddressController.index)
routes.get('/users/:user_id/techs', TechController.index)
routes.get('/report', ReportController.show)
routes.delete('/users/:user_id/techs', TechController.delete)

module.exports = routes