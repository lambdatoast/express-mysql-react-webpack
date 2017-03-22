const app = require('express')()
const routes = require('./routes')

app.use('/', routes)

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
