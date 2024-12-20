const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userID:String,
    company:String
})

module.exports = mongoose.model("Products",ProductSchema)