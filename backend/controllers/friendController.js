const Friend = require('../models/friendModel')
const mongoose = require('mongoose')

// get all friends
const getFriends = async (req, res) => {
    const friends = await Friend.find({}).sort({createdAt: -1})

    res.status(200).json(friends)
}

// get a single friend
const getFriend = async (req, res) => {
    const { id } = req.params

    // Verify ObjectId is a mongoDB objectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    // Find Friend
    const friend = await Friend.findById(id)

    // If friend is null, then respond with an error
    if (!friend){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(friend)
}

// create a new friend
const createFriend = async (req, res) => {
    const {fname, lname, age, birthday} = req.body

    // add doc to db
    try{
        const friend = await Friend.create({fname, lname, age, birthday})
        res.status(200).json(friend)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a friend

// update a friend

module.exports = {
    getFriend,
    getFriends,
    createFriend
}