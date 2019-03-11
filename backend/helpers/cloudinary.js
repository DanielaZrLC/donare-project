let cloudinary = require ('cloudinary');
let multer = require ('multer');
let cloudinaryStorage = require ('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'donare',
    allowedFormats : ['jpg', 'png', 'gif'],
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
})

const parser = multer({storage : storage});

module.exports = parser;