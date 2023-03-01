const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    otp:{
        type: String,
        required: true,
        unique: true,
        min: 6
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email is Already in use."]
    }
})

const Otpstore = mongoose.model('Otpstore',userSchema)
module.exports = Otpstore;