const express = require('express');
const commentModel = require('../models/commentModel');
const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

const comment = express.Router();

//! GET COMMENTS BY POST ID
comment.get("/comments/post/:postId", async (req, res) => {
	try {
		const comments = await commentModel.find({ postId: req.params.postId });

		if (!comments || comments.length === 0) {
			return res.status(404).send({
				statusCode: 404,
				message: 'No comments found for this post',
			});
		}

		res.status(200).send({
			statusCode: 200,
			totalCount: comments.length,
			comments,
		  });
		} catch (error) {
		  res.status(500).send({
			statusCode: 500,
			message: 'Internal server error',
			error,
		  });
		}
});


//! POST COMMENT
comment.post('/comments/create', async (req, res) => {

	const user = await userModel.findOne({_id: req.body.user});
	const postId = await postModel.findOne({_id: req.body.postId});

	if (!user || !postId) {
		return res.status(404).send({
			statusCode: 404,
			message: "post and/or user not found! (404 error)"
		})
	};

	const newComment = new commentModel({
		user: user._id,
		content: req.body.content,
		match: req.body.match,
		postId: postId._id,
	});

	try {
		const comment = await newComment.save();
		await postModel.updateOne({$push: { comments: comment } });

		res.status(201).send({
			statusCode: 201,
			message: "Comments saved successfully",
			payload: comment,
		});

	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: 'internal server error',
			error
		});
	}

});

//!DELETE COMMENT
comment.delete("/comments/delete/:commentId", async (req, res) => {
	const { commentId } = req.params;
	const commentExist = await commentModel.findById(commentId);

	if (!commentExist) {
		return res.status(404).send({
			statuscode: 404,
			message: `Comment with id ${commentId} not found`,
			error
		});
	}

	try {
		const commentToDelete = await commentModel.findByIdAndDelete(commentId);
		res.status(200).send({
			statusCode: 200,
			message: `Comment with id ${commentId} deleted successfully`,
			commentToDelete,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "Internal server error",
			error,
		});
	}
});


module.exports = comment;