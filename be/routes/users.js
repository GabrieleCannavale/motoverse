const express = require('express');
const user = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const UserAvatar = require('../middlewares/uploadUserAvatar');
const MotoImage = require('../middlewares/uploadMotoImage');

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
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		fullName: req.body.fullName,
		birthDate: req.body.birthDate,
		userAvatar: req.file.path,
		drivingExperienceLevel: req.body.drivingExperienceLevel,
	});
	console.log(newUser)
	try {
		const realUser = await newUser.save();
		console.log(realUser)
		res.status(201).send({
			statusCode: 201,
			message: "User saved successfully",
			realUser
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







//! POST NEW MOTO (Aggiunta di una moto al profilo dell'utente)
user.patch('/users/:id/addmoto', MotoImage.single("motoImage"), async (req, res) => {
	const { id } = req.params;
  
	try {
	  const userExist = await userModel.findById(id);
	  if (!userExist) {
		return res.status(404).send({ error: `User with id ${id} not found` });
	  }
  
	  const newMoto = {
		brand: req.body.brand,
		model: req.body.model,
		motoImage: req.file.path
	  };
  
	  userExist.motos.push(newMoto);
	  await userExist.save();
  
	  res.status(201).send({
		statusCode: 201,
		message: "Moto added successfully",
		newMoto
	  });
	} catch (error) {
	  res.status(500).send({
		statusCode: 500,
		message: "Internal server error",
		error
	  });
	}
  });
  
  //! DELETE MOTO BY ID (Rimozione di una moto dal profilo dell'utente)
  user.patch('/users/:userId/deletemoto/:motoId', async (req, res) => {
	const { userId, motoId } = req.params;
  
	try {
	  const userExist = await userModel.findById(userId);
	  if (!userExist) {
		return res.status(404).send({ error: `User with id ${userId} not found` });
	  }
  
	  const motoIndex = userExist.motos.findIndex(moto => moto._id.toString() === motoId);
	  if (motoIndex === -1) {
		return res.status(404).send({ error: `Moto with id ${motoId} not found for user ${userId}` });
	  }
  
	  userExist.motos.splice(motoIndex, 1);
	  await userExist.save();
  
	  res.status(200).send({
		statusCode: 200,
		message: `Moto with id ${motoId} deleted successfully for user ${userId}`
	  });
	} catch (error) {
	  res.status(500).send({
		statusCode: 500,
		message: "Internal Server error",
		error,
	  });
	}
  });
  

module.exports = user;