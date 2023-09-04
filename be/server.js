const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const cors = require('cors');

const PORT = 5070


//REQUIRING ROUTES

//REQUIRING MIDDLEWARES



const app = express();

//ROUTES

//MIDDLEWARES

mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>  console.log('Connesso al database MongoDB'));


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})

