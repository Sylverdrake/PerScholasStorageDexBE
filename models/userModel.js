const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema
({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

//Static Signup Method -- Use a normal function because this.x won't work
userSchema.statics.signup = async function(email, username, password)
    {
        const emailExists = await this.findOne({email})
        const usernameExists = await this.findOne({username})
            if (usernameExists)
            {
                throw Error('Username already exists')
            }
            else if (emailExists)
            {
                throw Error('Email already exists')
            }


        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await this.create({username, email, password: hash})
        return user
    }

module.exports = mongoose.model('User', userSchema)