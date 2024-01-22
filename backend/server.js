require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const friendRoutes = require('./routes/friends')
const userRoutes = require('./routes/user')

// the express() creates an express app for us
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/friends', friendRoutes)
app.use('/api/user', userRoutes)

// Default route for unmatched paths
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
     app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
}) 
    })
    .catch((error) => {
        console.log(error)
    })

 
