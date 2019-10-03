if(process.env.NODE_ENV === 'development') require('dotenv').config()

const express = require('express')
// conncet to mongoose
require('./config/mongooseConnect')

const app = express()

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// main routes
app.get('/')

// init app 
app.listen(PORT, () => console.log('SERVER LISTENING ON PORT ', PORT))