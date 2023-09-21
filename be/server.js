const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const cors = require('cors');

const PORT = 5070


//REQUIRING ROUTES
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const loginRoute = require('./routes/login');
const githubRoute = require('./routes/githubRoutes');
const commentsRoute = require ('./routes/comments');

//REQUIRING GLOBAL MIDDLEWARES



const app = express();

//MIDDLEWARES
app.use(cors());
app.use(express.json());


//ROUTES
app.use('/', usersRoute);
app.use('/', postsRoute);
app.use('/', loginRoute);
app.use('/', githubRoute);
app.use('/', commentsRoute);

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
  });



mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>  console.log('Connesso al database MongoDB'));


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})

