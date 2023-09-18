const express = require('express');
const mongoose = require("mongoose");

const postModel = require('../models/postModel');
const userModel = require('../models/userModel');
const commentModel = require('../models/commentModel');

const verifiedToken = require('../middlewares/verifyToken');
const postImage = require('../middlewares/uploadPostImage');

const post = express.Router();


//!GET ALL POSTS
post.get('/posts', async (req, res) => {
	const { page = 1, pageSize = 100 } = req.query;
	try {
		const totalPosts = await postModel.count();

		const posts = await postModel.find()
			.limit(pageSize)
			.skip((page - 1) * pageSize)
			.populate('user', "username userAvatar")
			.populate('comments');

		res.status(200).send({
			statusCode: 200,
			totalPosts: totalPosts,
			currentPage: +page,
			totalPages: Math.ceil(totalPosts / pageSize),
			pageSize: +pageSize,
			posts: posts
		})
	} catch (error) {
		console.log("nothing to see here:", error);

		res.status(500).send({
			statusCode: 500,
			message: "Internal server error",
			error,
		});

	}

});


//!GET SINGLE POST BY ID
post.get("/posts/:postId", async (req, res) => {
	const { postId } = req.params;
	try {
		const postById = await postModel.findById(postId);

		res.status(200).send({
			statusCode: 200,
			postById,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			messange: "Internal server error",
			error,
		});
	}
});


//!POST NEW POST
post.post("/posts/create", postImage.single('image'), async (req, res) => {
	
	

	const user = await userModel.findOne({ _id: req.body.user })
	
	if (!user) {
		return res.status(404).send({
			statusCode: 404,
			message: "404 error"
		})
	};



	const newPost = new postModel({
		title: req.body.title,
		image: req.file.path,
		startingPoint: req.body.startingPoint,
		endingPoint: req.body.endingPoint,
		province: req.body.province,
		kilometers: req.body.kilometers,
		travelTime: req.body.travelTime,
		date: req.body.date,
		user: user._id,
		content: req.body.content,
	});

	try {
		const post = await newPost.save();
		console.log(post);
		await userModel.updateOne({ _id: user.id }, { $push: { posts: post } })
		res.status(201).send({
			statusCode: 201,
			message: "Post saved successfully",
			payload: post,
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: 'internal server error!!!!!',
			error
		});
	}
});

module.exports = post;



