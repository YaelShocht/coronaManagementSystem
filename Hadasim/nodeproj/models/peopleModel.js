const mongoose = require("mongoose");
const PeopleSchema = new mongoose.Schema({
    tz:String,
    name:String,
    address:String,
    // address :{city:{type:String},
    //           Street:{type:String},
    //           number:{type:String}},  
    dateBorn:String,
    phone:String,
    cellPhon:String,
    datePositive:String,
    dateRecovery:String,
    image:String,
    vaccination: [{type:mongoose.Schema.Types.ObjectId,ref:"Vaccination" }]//מערך של חיסונים
})
module.exports = mongoose.model('people', PeopleSchema);