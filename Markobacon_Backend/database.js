const mongoose = require('mongoose');
require('dotenv').config()

// Schema(s)
const Post = new mongoose.Schema({
    title: String,
    tags: [String],
    posted: Date,
    postBody: String,
    archive: Boolean
})

const Login = new mongoose.Schema({
    username: String,
    password: String // Will be hashed, duh :)
})

// Model(s)
mongoose.model('Post', Post);
mongoose.model('Login', Login)

// Connect to the database
const uri = `mongodb+srv://${process.env.URI_USER}:${process.env.URI_PASS}@markside.rq6p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(uri);

// Log connection (in case of error)
const connection = mongoose.connection;
connection.on('error', (err) => console.log('Connection failed!\n'+ err))
connection.once('open', () => console.log('Connected to Markside database successfully'));