const express = require("express");
const app = express();
const port = 5000;

require('dotenv').config();

const mongoose = require('mongoose');
const dbName = process.env.DB;





const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@mern-cluster0.ntqkz8c.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log(`📡📡📡📡📡Established a connection to the database ${dbName}`))
    .catch(err => console.log(" ❌❌❌❌ Something went wrong when connecting to the database", err));



// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
