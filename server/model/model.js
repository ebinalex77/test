const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    item :  {
        type : String,
        required: true
        
    },
    discription : {
        type: String,
        required: true,
        unique: true
    },
    quatity : Number,
    status : String
})
  

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;



