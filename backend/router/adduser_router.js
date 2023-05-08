const express = require('express');
const router = express.Router();
const usermodel = require('../model/user_login_model');

// const mongoose = require('mongoose');
// require('../model/user_login_model');
// const Users = mongoose.model('users');

router.post('/', async(req,res) => {
    const new_user = new usermodel(req.body);
    // const { f_name, l_name, email_id, mobile_no, password, re_password } = req.body;

    try {
        // const old_user = Users.findOne({ mobile_no });
        
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