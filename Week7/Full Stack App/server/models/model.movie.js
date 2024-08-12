//? import the mongoose lib to build the schema
const mongoose = require("mongoose")

//! the model - the rules the entries need to follow
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is requires"],
        minLength: [2, "{PATH} must have at least 2 chars"]
    },
    image: {
        type: String
    },
    releaseYear: {
        type: Number,
        required: [true, "{PATH} is requires"],
        min: [1888, "{PATH} must be valid"]
    },
    seen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Movie = mongoose.model("Movie", MovieSchema)
module.exports = Movie