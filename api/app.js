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


// Varriables 
const PORT = process.env.PORT || 9000
const db_url = process.env.MONGODB_URI


// middleware configuration 
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: "5mb" }))
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}))

app.use(cookieParser())
app.use(cors())

/*
    Connect to DB
    username = mernblogdb
    password = ali23fatemeh
*/
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("DB is connected")).catch(console.error())



// Create Express Server 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
})