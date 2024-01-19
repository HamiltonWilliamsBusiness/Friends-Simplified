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
        return res.status(404).json({error: 'No such friend'})
    }

    // Find Friend
    const friend = await Friend.findById(id)

    // If friend is null, then respond with an error
    if (!friend){
        return res.status(404).json({error: 'No such friend'})
    }

    res.status(200).json(friend)
}

// create a new friend
const createFriend = async (req, res) => {
    const {fname, lname, age, birthday} = req.body

    let emptyFields = []

    if (!fname) {
        emptyFields.push('fname')
    }
    if (!lname) {
        emptyFields.push('lname')
    }
    if (!age) {
        emptyFields.push('age')
    }
    if (!birthday) {
        emptyFields.push('birthday')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }


    // add doc to db
    try{
        const friend = await Friend.create({fname, lname, age, birthday})
        res.status(200).json(friend)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a friend
const deleteFriend = async (req, res) => {
    const { id } = req.params

    // Verify ObjectId is a mongoDB objectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such friend'})
    }

    // Find Friend
    const friend = await Friend.findOneAndDelete({_id: id})

    // If friend is null, then respond with an error
    if (!friend){
        return res.status(400).json({error: 'No such friend'})
    }

    res.status(200).json(friend)
}

// update a friend
const updateFriend = async (req, res) => {
    const { id } = req.params

    // Verify ObjectId is a mongoDB objectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such friend'})
    }

    // Find Friend
    const friend = await Friend.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // If friend is null, then respond with an error
    if (!friend){
        return res.status(400).json({error: 'No such friend'})
    }

    res.status(200).json(friend)
}

module.exports = {
    getFriend,
    getFriends,
    createFriend,
    deleteFriend,
    updateFriend,
}