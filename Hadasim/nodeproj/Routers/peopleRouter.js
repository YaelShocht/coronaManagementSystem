const express = require('express')
const peopleBL = require('../Controllers/peopleBL')
const router = express.Router()
const multer = require('multer')
const uuidv4 = require("uuid")
// router.route('/').get(async (req, res) => {
//   const result = await userControllers.getAllPeople();
//   res.json(result);
// });
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

// router.post('/upload-image', upload.single('imgCollection'), (req, res, next) => {
  router.post('/upload-image/:id', upload.array('imgCollection', 6), (req, res, next) => {
  console.log(req.files);
  console.log(":::::::::::::::::::::");
   const url = req.protocol + '://' + req.get('host')
    const reqFiles = url + '/public/' + req.files[0].filename;
   peopleBL.saveImage(reqFiles, req.params.id).then((data)=>{
    return res.json(data)
   })
    // for (var i = 0; i < req.files.length; i++) {
    //     reqFiles.push({url:url + '/public/' + req.files[i].filename, isPermited:0})
    // }
    // const images = new Images({
    //     _id: new mongoose.Types.ObjectId(),
    //     imgCollection: reqFiles
    // });
    // images.save().then(result => {
    //     res.status(201).json({
    //         message: "Images registered successfully!",
    //         imagesCreated: {
    //             _id: result._id,
    //             imgCollection: result.imgCollection
    //         }
    //     })
    
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })
})

module.exports = router