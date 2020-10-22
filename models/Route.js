const { model, Schema } = require('mongoose');

const routeSchema = new Schema({
    username: String,
    createdAt: String,
    type: String,
    difficulty: String
})

module.exports = model("Route", routeSchema);