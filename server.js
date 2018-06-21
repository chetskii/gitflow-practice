const
express = require('express'),
app = express(),
logger = require('morgan'), 
mongoose = require('mongoose'),
PORT = 3000 
//midware
app.use(logger('dev'))
//routes
app.get
app.get 
app.post 
app.patch 
app.delete

app.listen(PORT, (err) => {
console.log(err || `Server runninig on ${PORT}`)
