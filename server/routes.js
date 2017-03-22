const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.use('/api', require('./api/routes'))

router.use(express.static(path.resolve(__dirname, '..', 'frontend', 'dist')))

router.get('*', require('./home'))

module.exports = router
