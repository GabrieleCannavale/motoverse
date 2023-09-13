const express = require('express');
const login = express.Router();

const userModel = require('../models/userModel');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


login.post("/login", async (req, res) => {
	const user = await userModel.findOne({ email: req.body.email })

	if (!user) {
		return res.status(404).send({
			statusCode: 404,
			message: "LOGIN ERROR, password or user not valid!"
		})
	};

	const validPasssword = await bcrypt.compare(req.body.password, user.password);

	if (!validPasssword) {
		return res.status(404).send({
			statusCode: 404,
			message: "LOGIN ERROR, password or user not found!"
		})
	};

	const token = jwt.sign({
		username: user.username,
		fullName: user.fullName,
		email: user.email,
		birthDate: user.birthDate,
		motos: user.motos,
		userAvatar: user.userAvatar,
		drivingExperienceLevel: user.drivingExperienceLevel,
		id: user._id
	}, process.env.JWT_SECRET, { expiresIn: "12h" });

	res.header("Authorization", token).status(200).send({
		statusCode: 200,
		message: "Login effettuato con successo",
		token
	});
});


module.exports = login;
