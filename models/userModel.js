const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema
({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

//Static Signup Method -- Use a normal function because this.x won't work
userSchema.statics.signup = async function(username, email, password)
    {
        //Validation
        if(!username || !email || !password)
        {
            throw Error('All fields must be completed')
        }
        if(!validator.isEmail(email))
        {
            throw Error('Email is not valid')
        }
        if(!validator.isStrongPassword(password))
        {
            throw Error('Please use a minimum of 8 characters, letters, numbers, and symbols.')
        }


        const usernameExists = await this.findOne({username})
        if (usernameExists)
        {
            throw Error('Username already exists')
        }

        const emailExists = await this.findOne({email})
            if (emailExists)
            {
                throw Error('Email already exists')
            }
        
        


        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await this.create({username, email, password: hash})
        return user
    }

    userSchema.statics.login = async function(username, password)
    {
        if (!username || !password)
        {
            throw Error('All fields must be filled')
        }

        const user = await this.findOne({username})
        if (!user)
        {
            throw Error('Username is incorrect.')
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match)
        {
            throw Error('Password is incorrect.')
        }

        return user
    
    }

module.exports = mongoose.model('User', userSchema)