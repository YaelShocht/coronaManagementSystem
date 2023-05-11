const Vaccination = require('../models/vaccinationModel');
const mongoose = require('mongoose')
const People = require('../models/peopleModel');

const getAllVaccination = function (obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await   Vaccination.find();
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}

// const getVaccinationByID = async (id) => {
//   return new Promise(async (resolve, reject) => {
//       try{
//        const data = await Vaccination.findOne({ id: id })
//             resolve(data)
  
//       } catch(err){
//                 reject(err)
//       }
         
//         })
//       }

const createVaccination = function (obj) {
  return new Promise(async (resolve, reject) => {
    try {
  //  let count= await  Vaccination.Sum(item=>item.userId==obj.userId)
  //  if(count<4){//sum(obj.userId)
  const newVaccination = new Vaccination(obj)

      await newVaccination.save();
 People.findByIdAndUpdate(newVaccination.userId, { $push: { vaccination: newVaccination._id } })

      resolve('Created !')
    }
   
     catch (err) {
      reject(err)
    }
  })
}

  module.exports = {
    getAllVaccination,
    createVaccination,
    //getVaccinationByID,
   
  };