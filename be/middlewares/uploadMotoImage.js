const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

//console.log(process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET, process.env.CLOUD_NAME)


const storageMotoImage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "motoImagesMV",
		allowed_formats: ["jpg", "jpeg", "png"]
	}
});

const MotoImage = multer({storage: storageMotoImage});

module.exports = MotoImage;