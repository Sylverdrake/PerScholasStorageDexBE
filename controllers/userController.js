const User = require('../models/userModel')


//Login User
const loginUser = async (req, res) =>
{
    res.json({msg: 'login user'})
}

//Signup User
const signupUser = async (req, res) =>
{
    const {username, email, password} = req.body
    try
    {
        const user = await User.signup(username, email, password)
        res.status(200).json({username, email, user})
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports = 
{
    loginUser,
    signupUser
}