const mongoose = require('mongoose');

const researcherAccSchema = new mongoose.Schema({
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
        min: 8
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


const researcheraccs = mongoose.model('researcheraccs', researcherAccSchema);

module.exports = researcheraccs;