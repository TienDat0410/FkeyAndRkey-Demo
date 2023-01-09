const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    to: {
        type: String
    },
    active: {
        type: Boolean,
    },
});


let menuItems = mongoose.model("menuItems", menuSchema);

module.exports =  menuItems;