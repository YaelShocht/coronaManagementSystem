const mongoose = require("mongoose");
const VaccinationSchema = new mongoose.Schema({
    dateGetVaccination:String, 
    manufacturer: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "people" }
})
module.exports = mongoose.model('Vaccination', VaccinationSchema);
