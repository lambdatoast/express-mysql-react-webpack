const router = require('express').Router()
const ctrl = require('./controller')

function onError(res) {
	res.status(400).json(err)
}

router.get('/all', (req, res) => {
	ctrl.all().then((users) => {
		res.status(200).json(users)
	}, onError)
})

router.post('/', (req, res) => {
	// Example: curl -H 'Content-Type: application/json' --data '{"name":"User 02","age":98}' http://localhost:8080/api/user
	ctrl.create(req.body).then((users) => {
		res.status(200).json(users)
	}, onError)
})

module.exports = router
