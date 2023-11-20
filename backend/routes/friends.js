const express = require('express')
const router = express.Router()

// Get all friends
router.get('/', (req, res) => {
    res.json({mssg: 'GET all friends'})
})

// Get a single friend
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single friend'})
})

// POST a new friend
router.post('/', async (req, res) => {
    const {fname, lname, age, birthday} = req.body

    try{
        const friend = await Friend.create({fname, lname, age, birthday})
        res.status(200).json(friend)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
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