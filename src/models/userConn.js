// This file is deprecated

const mongoose = require('mongoose');

// defining Schema for Business
const businessSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        minlength: 2
    },
    email:{
        type: String,
        required: true,
        unique: true, 
        minlength: 7
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    company_name:{
        type: String,
        
        required: true,
        minlength: 5,
        maxlength:30
    },
    position:{
        type: String,
        required: true,
        minlength: 5
    },
    country:{
        type: String,
        required: true
    }
})

// defining model for new collection
const businessUsers = new mongoose.model('businessUser', businessSchema);

module.exports = businessUsers;