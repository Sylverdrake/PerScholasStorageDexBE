const express = require('express');
const {getAllItems, getItem, createItem} = require('../controllers/itemController');

const router = express.Router();

//READ/GET All Items
router.get('/', getAllItems)

//READ/GET Specific Item
router.get('/:id', getItem)

//CREATE/POST New Item
router.post('/', createItem)


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