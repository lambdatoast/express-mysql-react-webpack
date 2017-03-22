const routes = require('express').Router()

routes.use('/user', require('./user/routes'))

module.exports = routes
