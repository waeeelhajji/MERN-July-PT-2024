const express = require("express");
const app = express();
const port = 5000;

require('dotenv').config();
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));


const MoviesRoutes = require("./routes/routes.movie")
MoviesRoutes(app)


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
