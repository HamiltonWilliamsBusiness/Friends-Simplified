const express = require('express')
const {
    createFriend,
    getFriend,
    getFriends,
    deleteFriend,
    updateFriend,
} = require('../controllers/friendController')
const router = express.Router()

// Get all friends
router.get('/', getFriends)

// Get a single friend
router.get('/:id', getFriend)

// POST a new friend
router.post('/', createFriend)

// DELETE a new friend
router.delete('/:id', deleteFriend)

// UPDATE a new friend
router.patch('/:id', updateFriend)

module.exports = router