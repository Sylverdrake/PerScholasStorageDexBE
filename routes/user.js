const express = require('express')
const router = express.Router()

const {loginUser, signUpUser} = require('../controllers/userController')

//Login Route
router.post('/login', loginUser)

//Signup Route
router.post('/signup', signUpUser)

module.exports = router