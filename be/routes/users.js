const express = require('express');
const user = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const UserAvatar = require('../middlewares/uploadUserAvatar');


//! get ALL USERS
user.get('/users', async (req, res) => {
	try {
		const users = await userModel.find()
			.populate("posts");
		res.status(200).send({
			statusCode: 200,
			users
		})
	} catch (error) {
		res.status(500).send({ error: 'something wrong, find users error' })
	}
});

//! get USER BY ID
user.get('/users/:id', async (req, res) => {
	const { id } = req.params;

	const userExist = await userModel.findById(id);
	if (!userExist) {
		res.status(500).send({ error: `user with id ${id} not found` })
	};

	try {
		const userById = await userModel.findById(id);
		res.status(200).send({
			statusCode: 200,
			userById
		})
	} catch (error) {
		res.status(500).send({ error: `find user error` })
	}
});


//! POST NEW USER (REGISTER)
user.post('/register', UserAvatar.single("userAvatar"), async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	const newUser = new userModel({
		username: req.body.name,
		email: req.body.email,
		password: hashedPassword,
		fullName: req.body.fullName,
		birthDate: req.body.birthDate,
		userAvatar: req.file.path,
		drivingExperienceLevel: req.body.path
	});

	try {
		const user = await newUser.save();

		res.status(201).send({
			statusCode: 201,
			message: "User saved successfully",
			user
		})
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: "internal server error!",
			error
		})
	}
});


//!DELETE USER BY ID
user.delete('/deleteuser/:id', async (req, res) => {
	const { id } = req.params;

	const userExist = await userModel.findById(id);
	if (!userExist) {
		res.status(500).send({ error: `user with id ${id} not found` })
	};

	try {
		const userToDelete = await userModel.findByIdAndDelete(id);

		res.status(200).send({
			statusCode: 200,
			message: `user with is ${id} deleted successfully!`
		});
	} catch (error) {
		res.status(500).send({
			statusCode: 500,
			message: 'internal Server error'
		});
	}
});

//!PATCH USER BY ID
user.patch("/edituser/:id", async (req, res) => {
	const { id } = req.params;

	const userExist = await userModel.findById(id);
	if (!userExist) {
		res.status(500).send({ error: `user with id ${id} not found` })
	};

	try {
		const userId = id;
		const dataToUpdate = req.body;
		const options = { new: true };

		const result = await userModel.findByIdAndUpdate(
			userId,
			dataToUpdate,
			options
		);

		res.status(200).send({
			statusCode: 200,
			message: `user with id ${id} modified successfully!`,
			result
		})
	} catch (error) {
		res.status(500).send({
			satusCode: 200,
			message: 'Internal Server error',
			error,
		});
	}
});

module.exports = user;