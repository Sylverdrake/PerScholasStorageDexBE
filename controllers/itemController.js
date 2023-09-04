const Item = require('../models/itemModel');
const mongoose = require('mongoose');

//READ/GET All Items
const getAllItems = async (req, res) =>
{
    //variable which retrieves all items asynchronously, sorts by most recent.
    const items = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(items)
}

//READ/GET Specific Item
const getItem = async (req, res) =>
{
    const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error: 'Invalid Database ID - Please use a valid ID'})
        }

    const item = await Item.findById(id)
        if(!item)
        {
            return res.status(404).json({error: 'Item does not exist'})
        }

    res.status(200).json(item)
}

//CREATE/POST New Item
const createItem = async (req, res) =>
{
    //create a body with destructured elements
    const {name, location, category, description} = req.body

    //Try-Catch to add document to database
    try
    {
        const newItem = await Item.create({name, location, category, description});
        res.status(200).json(newItem)
    }
    catch(error)
    {
        res.status(400).json({error: error.message})
    }
}

//DELETE Item
const deleteItem = async (req, res) =>
{
    const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error: 'Invalid Database ID - Please use a valid ID'})
        }

    const item = await Item.findOneAndDelete({_id: id})
        if(!item)
        {
            return res.status(404).json({error: 'Item does not exist'})
        }
        res.status(200).json(item)
}
//UPDATE Item
const updateItem = async (req, res) =>
{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'Invalid Database ID - Please use a valid ID'})
    }

    const item = await Item.findOneAndUpdate({_id: id},
        {
            ...req.body
        })
    if(!item)
    {
        return res.status(404).json({error: 'Item does not exist'})
    }
    res.status(200).json(item)
}

module.exports = 
{
    getAllItems,
    getItem,
    createItem,
    deleteItem,
    updateItem
}