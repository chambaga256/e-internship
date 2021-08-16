const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let applySchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    regno:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        require:true

    },
    course:{
        type: String,
        required:true,
        
    },
    university:{
        type: String,
        required:true,
    },
    intern:{
        type: String
    },
    gender:{
        type: String,
        required:true,
    }
    },{
        collection: 'applications'
    })

module.exports = mongoose.model('Application',  applySchema);