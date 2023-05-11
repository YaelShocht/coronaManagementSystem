const People = require('../models/peopleModel');
const mongoose = require('mongoose')
// const m=mongoose.model('people',my)
// const getAllPeople = function () {
//   return new Promise((resolve, reject) => {
//     People.find({}, function (err, data) {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
const getAllPeople = function () {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await People.find().populate("vaccination");
      
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}
const getPeopleByID =  (id) => {
  return new Promise(async(resolve, reject) => {
    try {
    const people =  await  People.findById( id)
      resolve(people)
    } catch (err) {
      reject(err)
    }
    
  })
}
const saveImage =  (image, idPeaple) => {
  return new Promise(async(resolve, reject) => {
    try {
    const people =  await People.findById(idPeaple)
    people.image = image
    console.log(people);
     const savedPeople = await People.findByIdAndUpdate(idPeaple, people)
      resolve(savedPeople+"updated successfuly")
    } catch (err) {
      reject(err)
    }
    
  })
}
  

const createPeople = function (obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const people = new People(obj)
      await people.save();
      resolve('Created !')
    } catch (err) {
      reject(err)
    }
  })
}
  module.exports = {
    getAllPeople,
    createPeople,
    getPeopleByID,
    saveImage,
   
  };