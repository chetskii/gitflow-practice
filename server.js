const
express = require('express'),
app = express(),
logger = require('morgan')
PORT = 3000




app.listen(PORT, (err) => {
console.log(err || `Server runninig on ${PORT}`)
