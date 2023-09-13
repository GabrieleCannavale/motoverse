const mongoose = require('mongoose');

const userModelSchema = new mongoose.Schema({

	username: {
		type: String,
		required: true,
		unique: true
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},

	fullName: {
		type: String,
		required: true
	},

	birthDate: {
		type: String,
		required: true,
	},

	userAvatar: {
		type: String,
		required: false,
		default: "https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg"
	},

	drivingExperienceLevel: {
		type: String,
		required: true,
	},

	bio: {
		type: String,
		required: false,
		default: "TYPE BIO HERE"
	},

	motos: [
        {
            brand: {
                type: String,
                required: false
            },
            model: {
                type: String,
                required: false
            },
            motoImage: {
                type: String,
                required: false
            }
        }
    ],

	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
			default: []
		}
	]


}, { timestamps: true, strict: true })

module.exports = mongoose.model('User', userModelSchema, "users");
