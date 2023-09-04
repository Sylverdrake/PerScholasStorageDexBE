//===Requirements===
require('dotenv').config();

//===Constants===
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const itemRoutes = require('./routes/items')

//===Middleware===
//If request has body, passes data
app.use(express.json())

//Shows requests in console
app.use((req, res, next) =>
{
    console.log(req.path, req.method)
    next();
})

//===Route Handler===
//TEST
// app.get('/', (req, res) =>
// {
//     res.json({msg: 'Test message'})
// })

//Use itemRoutes
app.use('/api/items',itemRoutes)

//Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {
        //LISTEN for Requests when connected to database
        app.listen(process.env.PORT, () =>
        {
            console.log(`Connected to database. Listening on Port ${process.env.PORT}.`)
        })
    })
    .catch((error) =>
    {
        console.log(error)
    })



