const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const config = require('./config/index')
const seederService = require('./services/seeder.service');

mongoose.connect(config.dbConnection, { useNewUrlParser: true})

app.use(bodyParser.json())

const corsConfig = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    next()
}

app.use(corsConfig);

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))