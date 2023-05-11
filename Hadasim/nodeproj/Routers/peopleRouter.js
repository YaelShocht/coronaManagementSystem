const express = require('express')
const peopleBL = require('../Controllers/peopleBL')
const router = express.Router()
const multer = require('multer')
const uuidv4 = require("uuid")

router.route('/').get(function (req, resp) {
  peopleBL.getAllPeople().then((data) => {
    return resp.json(data)
  })
})

router.route('/:id').get(function (req, resp) {
  const id = req.params.id
  peopleBL.getPeopleByID(id).then((data) => {
    return resp.json(data)
  })
})


router.route('/').post(function (req, resp) {
  const obj = req.body
  console.log(obj)
  peopleBL.createPeople(obj).then((data) => {
    return resp.json(data)
  })
})



const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4.v4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {

        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/webp") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


  router.post('/upload-image/:id', upload.array('imgCollection', 6), (req, res, next) => {
  console.log(req.files);
  console.log(":::::::::::::::::::::");
   const url = req.protocol + '://' + req.get('host')
    const reqFiles = url + '/public/' + req.files[0].filename;
   peopleBL.saveImage(reqFiles, req.params.id).then((data)=>{
    return res.json(data)
   })
   

module.exports = router
