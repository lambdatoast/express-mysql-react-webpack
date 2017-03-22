
const User = require('../models').User

module.exports.all = function () {
	return User.findAll()
}

module.exports.create = function (unsafeData) {
	const name = unsafeData.name
	const age = unsafeData.age
	return User.create({ name: name, age: age })
}
