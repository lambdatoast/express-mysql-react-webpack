const Sequelize = require('sequelize')

module.exports = function (db) {
	const User = db.define('user', {
		name: Sequelize.STRING,
		age: Sequelize.INTEGER
	}, { timestamps: false })
	return User
}
