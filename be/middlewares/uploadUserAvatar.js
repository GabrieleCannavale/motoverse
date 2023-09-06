const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

//console.log(process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET, process.env.CLOUD_NAME)


const storageUserAvatar = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: "userAvatarsMV",
		allowed_formats: ["jpg", "jpeg", "png"]
	}
});

const UserAvatar = multer({storage: storageUserAvatar});

module.exports = UserAvatar;