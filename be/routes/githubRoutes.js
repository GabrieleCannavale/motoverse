const express = require('express');
const passport = require('passport');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const GithubStrategy = require('passport-github2');
require('dotenv').config();

const github = express.Router();
