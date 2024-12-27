const mongoose = require('mongoose');

async function connectioMongoDb(url){
    return mongoose.connect(url);
}


module.exports = {connectioMongoDb}