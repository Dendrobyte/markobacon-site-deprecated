const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('./database.js');

const app = express();

const Post = mongoose.model('Post');
const Login = mongoose.model('Login');

app.use(express.json());

// CORS :(
app.use((req, res, next) => {
    const allowedOrigins = [
        `http://${process.env.SITE_ORIGIN}`,
        `http://${process.env.SITE_ORIGIN}:3000`
    ]
    const { origin } = req.headers
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin)
    }
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    next()
})

// For data validation / sanitization
const { body, validationResult } = require('express-validator');

/* Login requests */
app.get('/login', 

    // "sanitize" -- escaping not the best idea, but this won't be a multi-user setup
    body('username').escape().isLength({min: 4}).isAlphanumeric(),
    body('password').escape().isLength({min: 6}).isAlphanumeric(),

    (req, res) => {
        // Retrieve hashed password based on entered string.
        // If the username isn't found, return false login.
        // If the password doesn't match, return false login.
        usernameString = req.query.username;
        passwordString = req.query.password;

        Login.findOne # bruh
    }
)

app.post('/newuser', (req, res) => {

})

/* Blog post requests */