const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number },
    qte: Number,
    createOn: { type: Date, default: Date.now },
    category: { type: String, enum: ["pc", "telephone"] }
    //imagesrc  a faire 
    //user 
})
const Product = mongoose.model("product", productSchema)
module.exports = Product