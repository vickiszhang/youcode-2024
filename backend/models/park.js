const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const parkSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("parks", parkSchema);
