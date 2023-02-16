const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["client", "admin", "superAdmin", "vendeur"], default: "client" }
}, { timestamps: true })
module.exports = User= mongoose.model("user", userSchema)
