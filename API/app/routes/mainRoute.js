const express = require('express');
const app = express();

const logicRoute = require('./logic/respostasLogic')
app.use('/', logicRoute)

module.exports = app