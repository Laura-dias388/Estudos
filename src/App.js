const express = require('express');// express é para subir a API
const foodRoute = require('./routes/foodRoute')

const app = express();// app = API

app.use('/food', foodRoute);

module.exports = app;