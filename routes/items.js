const express = require('express');
const {getAllItems, getItem, createItem, deleteItem, updateItem} = require('../controllers/itemController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require authorization to view routes
router.use(requireAuth)

//READ/GET All Items
router.get('/', getAllItems)

//READ/GET Specific Item
router.get('/:id', getItem)

//CREATE/POST New Item
router.post('/', createItem)

//DELETE Item
router.delete('/:id', deleteItem)

//UPDATE Item
router.patch('/:id', updateItem)

module.exports = router