const express = require("express");
require('dotenv').config({ silent: true })
const PORT = process.env.port || 3001;

const app = express();

// CORS and whatnot

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

/* API routes */

app.get("/allentries", (req, res) =>{
    res.json({message: "Result from allentries api route!"});
    console.log("Request made to /allentries");
});

app.post("/newentry", (req, res) =>{
    res.json({message: "Result from newentry api route!" });
});

// Finalize server setup
app.listen(PORT, () => {
    console.log(`Markside server up on port ${PORT}`);
})