const MovieController = require("../controllers/controller.movie")


module.exports = (app) => {
    app.get("/api/movies", MovieController.findALLMovies);
    app.get("/api/:id/movies", MovieController.findOneSingleMovie);
    app.post("/api/movies", MovieController.createNewMovie);
    app.patch("/api/:id/movies", MovieController.updateExistingMovie);
    app.delete("/api/:id/movies", MovieController.deleteAnExistingMovie);
}

