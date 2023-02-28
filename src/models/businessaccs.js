const mongoose = require('mongoose');

// defining Schema for BusinessAcc
const businessAccSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email is Already in use."]
    },
    password: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    accepted_terms: {
        type: Boolean,
        required: true
    }
})



// defining model for new collection
// Create the module constructor using the schema
const businessaccs = mongoose.model('businessaccs', businessAccSchema);

// Export the module
module.exports = businessaccs;