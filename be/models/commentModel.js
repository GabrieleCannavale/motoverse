const mongoose = require("mongoose");

const commentModelSchema = new mongoose.Schema(
	{
		user: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		}],

		postId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},

		content: {
			type: String,
			required: true,
		},

		match: {
			type: Boolean,
			required: false,
			default: false
		}
	}, {timestamps:true, strict:true});

	module.exports = mongoose.model("Comment", commentModelSchema, "comments")