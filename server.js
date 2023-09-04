//===Requirements===
require('dotenv').config();

//===Constants===
const express = require('express');
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

//LISTEN
app.listen(process.env.PORT, () =>
{
    console.log(`Listening on Port ${process.env.PORT}.`)
})

