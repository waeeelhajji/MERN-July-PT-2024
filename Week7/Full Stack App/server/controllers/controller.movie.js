// the controller does the CRUD for the DB
// import the model here
const Movie = require("../models/model.movie")

//? READ ALL 
module.exports.findALLMovies = (req, res) => {
    Movie.find() //[]
        .then((AllMovies) => {
            console.log(">>> this is ALL My Movies ", AllMovies)
            res.json(AllMovies)
        })
        .catch(err => {
            res.json(err)
        })
}

//? READ ONE
module.exports.findOneSingleMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneSingleMovie => {
            res.json(oneSingleMovie)
        })
        .catch((err) => {
            res.json(err)
        });
}
//? CREATE
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json({ movie: newlyCreatedMovie })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateExistingMovie = (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMovie => {
            res.json({ movie: updatedMovie })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
