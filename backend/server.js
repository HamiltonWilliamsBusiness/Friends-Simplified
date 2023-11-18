require('dotenv').config()
const express = require('express')
const friendRoutes = require('./routes/friends')

// the express() creates an express app for us
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use(friendRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})  
