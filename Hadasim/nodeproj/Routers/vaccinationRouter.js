const express = require('express')
const vaccinationBL = require('../Controllers/vaccinationBL')
const router = express.Router()


router.route('/').get(function (req, resp) {
  vaccinationBL.getAllVaccination().then((data) => {
    return resp.json(data)
  })
})
// router.route('/:id').get(function (req, resp) {
//   const id = req.params.id
//   vaccinationBL.getVaccinationByID(id).then((data) => {
//     return resp.json(data)
//   })
// })

router.route('/').post(function (req, resp) {
  const obj = req.body
  // const userId = req.params.userId ;
  vaccinationBL.createVaccination(obj).then((data) => {
    return resp.json(data)
  })
})
module.exports = router