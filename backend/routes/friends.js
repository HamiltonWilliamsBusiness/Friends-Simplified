const express = require('express')
const {
    createFriend,
    getFriend,
    getFriends,
} = require('../controllers/friendController')
const router = express.Router()

// Get all friends
router.get('/', getFriends)

// Get a single friend
router.get('/:id', getFriend)

// POST a new friend
router.post('/', createFriend)

// DELETE a new friend
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new friend'})
})

// UPDATE a new friend
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a new friend'})
})

module.exports = router