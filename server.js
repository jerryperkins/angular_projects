const express = require('express')
const app = express()
const mongoose = require('mongoose');

require('./server/config/mongoose')

app.use(express.static(__dirname + "/public/dist/public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));


require('./server/config/routes')(app)


app.listen(8000, () => console.log("Listening on port 8000"))