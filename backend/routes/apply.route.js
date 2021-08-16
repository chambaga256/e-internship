// eslint-disable-next-line no-unused-vars
let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//Apply model
let applySchema = require('../models/Apply');

//send application
router.route('/apply').post((req, res, next)=>{
    applySchema.create(req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

//get applications
router.route('/dashboard').get((req, res)=>{
    // eslint-disable-next-line array-callback-return
    applySchema.find((error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }
    })
});

//admin route
router.route('/admin').get((req, res)=>{
    // eslint-disable-next-line array-callback-return
    applySchema.find((error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }
    })
});

// Delete Application
router.route('/delete-student/:id').delete((req, res, next) => {
    applySchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;