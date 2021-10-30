const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator')
require('./database.js');
require('dotenv').config()
const PORT = process.env.PORT || 3001;

const app = express();

const Post = mongoose.model('Post');
const Login = mongoose.model('Login');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// CORS and whatnot
app.use((req, res, next) => {
    const allowedOrigins = [
        `http://${process.env.SITE_ORIGIN}`,
        `http://${process.env.SITE_ORIGIN}:3000`,
        `https://${process.env.SITE_ORIGIN}`,
        `https://${process.env.SITE_ORIGIN}:3000`
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


/* Login requests */
app.get('/login', 
    // "sanitize" -- escaping not the best idea, but this won't be a multi-user setup
    body('username').escape().isLength({min: 4}).isAlphanumeric(),
    body('password').escape().isLength({min: 6}).isAlphanumeric(),

    (req, res) => {
        console.log("login route called!")
        // Retrieve hashed password based on entered string.
        // If the username isn't found, return false login.
        // If the password doesn't match, return false login.
        usernameString = req.query.username;
        passwordString = req.query.password;

        Login.findOne({ username: usernameString }).then((user) =>{
            console.log(res.json);
            if(user.password === passwordString){
                alert("Logged in!")
            } else {
                alert("Wrong password!")
            }
        }).catch((err)=>{
            
        })
    }
)

app.post('/newuser', (req, res) => {

})

/* Blog post requests */

app.get("/allentries", (req, res) => {
    res.json({message: "Result from allentries api route!"});
    console.log("Request made to /allentries");
});

app.post("/newentry", (req, res) => {
    res.json({message: "Result from newentry api route!" });
});

// Finalize server setup
app.listen(PORT, () => {
    console.log(`Markside server up on port ${PORT}`);
})