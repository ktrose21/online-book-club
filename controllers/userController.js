const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register User
exports.registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.status(201).json("User registered successfully!");
    } catch (error) {
        res.status(500).json(error);
    }
};

// Login User (Simplified)
exports.loginUser = async (req, res) => {
    res.status(200).json("Login endpoint");
};
