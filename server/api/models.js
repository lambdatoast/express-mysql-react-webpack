const db = require('../db')

module.exports = {
	User: require('./user/model')(db)
}
