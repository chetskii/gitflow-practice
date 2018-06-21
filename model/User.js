const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, maxLength: 20 },
    age: { type: Number, min: 21 },
    email { type: String, required: true, unique: true }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User