if(process.env.NODE_ENV === 'development') require('dotenv').config()

const errorHandler = require('./middlewares/errorHandler')
const express = require('express')
// conncet to mongoose
require('./config/mongooseConnect')

const app = express()
const indexRoute = require('./routes/index')

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', indexRoute)

// main routes
app.get('/')

//Error handler
app.use(errorHandler)

// init app 
app.listen(PORT, () => console.log('SERVER LISTENING ON PORT ', PORT))