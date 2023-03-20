const express = require('express');
const router = express.Router();
const itemmodel = require('../model/item_model');

router.post('/', async(req,res) => {
    const new_item = new itemmodel(req.body);
    try {
        await new_item.save();
        res.status(200).json({
            'message': 'Item added successfully'
        })
    }
    catch(err) {
        res.status(500).json({
            'message': 'Error adding item to DB'
        })
    }
})

module.exports = router;