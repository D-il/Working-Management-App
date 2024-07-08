const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Todos:{
        type:String,
        required:true
    },


})


module.exports = mongoose.model('users',UserSchema)
