const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./api/calcRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/api/calc', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}
