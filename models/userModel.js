const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema

const userSchema = new Schema
({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

//Static Signup Method
userSchema.statics.signUp = async (username, password) =>
    {
        const exists = await this.findOne({username})
            if (exists)
            {
                throw Error('Username already exists')
            }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await this.create({username, password: hash})
    
        return user
    }

module.exports = mongoose.model('User', userSchema)