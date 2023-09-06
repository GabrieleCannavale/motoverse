const mongoose = require('mongoose');

const postModelSchema = new mongoose.Schema({

	title: {
		type: String,
		required: true
	},
	startingPoint: {
		type: String,
		required: true
	},
	endingPoint: {
		type: String,
		required: true
	},
	placeImage: {
		type: String,
		required: false,
		default: "https://di-sitebuilder-assets.s3.amazonaws.com/generic-placeholder.png",
	},
	content: {
		type: String,
		required: true
	},
	kilometers: {
		type: Number,
		required: false
	},
	travelTime: {
		type: Number,
		required: false
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment",
		default: []
	}]
},{timestamps: true, strict: true});

module.exports = mongoose.model('Post', postModelSchema, 'posts');