const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
exports.register = async (req, res) => {
    try {
        const { email, userName, password } = req.body;
        const user = await userModel.findOne({ userName: userName });
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const newUser = new userModel({
            email: email,
            userName: userName,
            password: password,
        })
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })
    }
}

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await userModel.findOne({ userName: userName });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }
        res.json({
            auth: {
                username: userName,
                userId: user._id
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal error' })
    }
}