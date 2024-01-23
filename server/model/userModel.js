const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    userName: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;