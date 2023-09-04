const mongoose = require('mongoose');

const motoModelSchema = new mongoose.Schema({

	brand: {
		type: String,
		required: true
	},

	model: {
		type: String,
		required: true
	},

	type: {
		type: String,
		required: true
	},

	year: {
		type: Number,
		required: false
	},

	image: {
		type: String,
		required: false,
		default: "https://static.vecteezy.com/ti/vettori-gratis/p1/7275607-moto-gara-silhouette-gratuito-vettoriale.jpg"
	},

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}
},{timestamps: true, strict: true})

module.exports = mongoose.model('Moto', motoModelSchema, "motos");
