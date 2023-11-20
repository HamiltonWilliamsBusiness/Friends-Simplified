const Friend = require('../models/friendModel')

// get all friends

// get a single friend

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
    createFriend
}