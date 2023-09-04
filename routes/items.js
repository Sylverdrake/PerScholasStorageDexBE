const express = require('express');
const Item = require('../models/itemModel')
const router = express.Router();

//READ/GET All Items
router.get('/', (req, res)=>
{
    res.json({msg: 'Read/Get All Items '})
})

//READ/GET Specific Item
router.get('/:id', (req,res)=>
{
    res.json({msg: 'Read/Get Single Item'})
})

//CREATE/POST New Item
router.post('/', async (req, res) =>
{
    //create a body with destructured elements
    const {name, location, category, description} = req.body

    //Try-Catch
    try
    {
        const newItem = await Item.create({name, location, category, description});
        res.status(200).json(newItem)
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
})

//DELETE Item
router.delete('/:id', (req, res) =>
{
    res.json({msg: 'Delete Item'})
})

//UPDATE Item
router.patch('/:id', (req, res) =>
{
    res.json({msg: 'Update Item'})
})

module.exports = router