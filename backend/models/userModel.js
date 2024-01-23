const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static Signup Method
userSchema.statics.signup = async function (email, password) {

    // validation
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    // Checking if it's null, if it is empty it's null
    if (exists) {
        throw Error('Email arleady in use')
    }

    // Basically this code adds more security to passwords by using salt
    // a salt is a random string of characters that is added to someone's
    // password to give it an extra level of security
    // ex. mypasswordj87w38ns9dn 
    // await is used because the method below takes time to complete by design
    // The function takes a round, or the cost of the salt, the higher the number
    // The longer the it will take fro ptoential hackers to crack passwords
    // This makes it take users longer to sign up, so you have to find a balance
    // The default value is 10
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash})

    return user

}

module.exports = mongoose.model('User', userSchema)