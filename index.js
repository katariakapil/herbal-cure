const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine',hbs);

app.use(express.static(__dirname +'/'));


//get port from heroku
const port = process.env.PORT || 3000;

app.listen(port);