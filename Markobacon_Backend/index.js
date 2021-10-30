const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { reset } = require('nodemon');
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
        console.log("Login route called!")
        usernameString = req.query.username;
        passwordString = req.query.password;

        // Toggle variable for manual account creation -- Always false unless Mark is making a new account or something
        const createAccount = false;

        if (createAccount){
            // If we're making a new account, store the username and the hash in the database

            passwordHash = bcrypt.hashSync(passwordString, bcrypt.genSaltSync(12))
            const newUser = {
                username: usernameString,
                password: passwordHash
            }

            new Login(newUser).save()

            res.json({createAccount: true})
            return
        }

        // Retrieve hashed password based on entered string.
        // If the username isn't found, return false login.
        // If the password doesn't match, return false login.
        Login.findOne({ username: usernameString }).then((user) =>{

            if(bcrypt.compareSync(passwordString, user.password)){
                res.json({login: true});
            } else {
                res.json({login: false, reason: "Wrong password"});
            }
        }).catch((err)=>{
            res.json(err)
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