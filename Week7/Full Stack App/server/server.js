const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors")

require('dotenv').config();
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }), cors());

// cors({
//     origin: "localhost:3000",
//     methods:["GET","POST"]
// })


const MoviesRoutes = require("./routes/routes.movie")
MoviesRoutes(app)


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
