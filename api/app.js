/*
    This is the server js file 
*/

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')


// dev inviroment setup 
require('dotenv').config()
// create express APP 
const app = express()


// middleware configuration 
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "5mb" }))
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}))

app.use(cookieParser())
app.use(cors())


// Varriables 
const PORT = process.env.PORT || 9000

// Create Express Server 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
})