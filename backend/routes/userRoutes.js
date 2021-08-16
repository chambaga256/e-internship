
const userSchema = require('../models/User')
const express  = require('express')


const router  =  express.Router();

router.route('/').post((req,res) =>{
    userSchema.create(req.body,(error, data)=>{
        if(error){
            return(error)
        } else{
            console.log(data)
            res.json(data)
        }
    })
}) 

module.exports = router;
























// const express  = require('express');
// const router   = express.Router();
// const registerUser    = require('../controllers/userControllers')

// router.route('/users').post(registerUser);


// module.exports = router;  