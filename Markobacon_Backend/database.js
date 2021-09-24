const mongoose = require('mongoose');

// Schema(s)
const Post = new mongoose.Schema({
    title: String,
    tags: [String],
    posted: Date,
    postBody: String,
    archive: Boolean
})

// Model(s)
mongoose.model('Post', Post);

// Connect to the database
const uri = 'mongodb+srv://${process.env.URI_USER}:${process.env.URI_PASS}@markside.rq6p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { newUrlParser: true, useUnifiedTopology: true });

// Log connection (in case of error)
const connection = mongoose.connection;
connection.on('error', (err) => console.log('Connection failed!\n'+ err))
connection.once('open', () => console.log('Connected to Markside database successfully'));