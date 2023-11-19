const express = require('express')

const router = express.Router()

// Get all friends
router.get('/', (req, res) => {
    res.json({mssg: 'GET all friends'})
})

// Get a single friend
router.get('/:id', (res, req) => {
    res.json({mssg: 'GET a single friend'})
})

// POST a new friend
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new friend'})
})

// Delete a new friend
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new friend'})
})

// POST a new friend
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a new friend'})
})

module.exports = router