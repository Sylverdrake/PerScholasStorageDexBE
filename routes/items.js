const express = require('express');
const router = express.Router();

//READ All Items
router.get('/', (req, res)=>
{
    res.json({msg: 'Read All Items '})
})

//READ Specific Item
router.get('/:id', (req,res)=>
{
    res.json({msg: 'Read Single Item'})
})

//CREATE New Item
router.post('/', (req, res) =>
{
    res.json({msg: 'Create New Item'})
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