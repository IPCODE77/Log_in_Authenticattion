
const mongoose = require("mongoose");
const { type } = require("os");


const User = mongoose.Schema(
    {
        userName:{
            type:String,
            required:true
        },
        userEmail:{
            type:String,
            required:true,
            unique:true
        },
        userMobile:{
            type:String,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        },
        latitude:{
            type:String,
            required:true
        },
        longitude:{
            type:String,
            required:true
        }
    }
);

const userUrl = mongoose.model('user',User);

module.exports = userUrl;