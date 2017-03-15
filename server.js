// server.js
// nicolas roldos

'use strict'

// set dependency 'express' to 'express' variable
// invoke instance of express module in 'app' variable
// set a 'PORT' number or current 'env' environment-port
//  to 'port' variable
var express = require('express')
var app = express()
var port = process.env.PORT || 8000

app.use(function(req, res) {

  // set 'res' response property 'send' to print 'Hello World'
  res.send('Hello World')
})

// pass 'express' server 'hello_express' (invoked in var 'app')
//  variable 'port' to 'listen' on it's 'PORT' value
app.listen(port, function(){
  console.log('\'hello_express\' listening on port: ', port);
})
