const mongoose = require("mongoose");

const WorkList = new mongoose.List({
    WorkID:{
        type:String,
        required:true
    },
    WorkTitle:{
        type:String,
        required:true
    },
    WorkDescription:{
        type:String,
        required:true
    },
    WorkStatus:{
        type:String,
        required:true
    },
    CreationDate:{
        type:Date,
        required:true
    },
    DueDate:{
        type:Date,
        required:true
    },
    PriorityLevel:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('work',WorkList)