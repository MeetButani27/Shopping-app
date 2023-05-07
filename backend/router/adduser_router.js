const express = require('express');
const router = express.Router();
const usermodel = require('../model/user_login_model');

router.post('/', async(req,res) => {
    const new_user = new usermodel(req.body);
    try {
        await new_user.save();
        res.status(200).json({
            'message': 'User added successfully'
        })
    }
    catch(err) {
        res.status(500).json({
            'message': 'Error adding user to DB'
        })
    }
})

module.exports = router;