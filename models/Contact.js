const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name:String,
    address:String,
    phone:String,
    email:String,
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);