const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const {SECRET} = require('../config/config');

const generateAccessToken = (id, user) => {
    const payload = {
        id,
        user
    }
    return jwt.sign(payload, SECRET, {expiresIn: "24h"});
}

class authController {
    async registration(req, res) {
        try {
            const {username, phone, email, password} = req.body;
            const candidate = await User.findOne({email});

            if(candidate) {
                return res.status(400).json({message: "A user with such an email already exists"});
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({username, phone, email, password: hashPassword});
            await user.save();

            return res.json({message: "The user has been successfully registered"});

        } catch(e) {
            console.log(e);
            res.status(400).json({message:'Registration error'});
        }
    }
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: `User not found`});
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: `Invalid password entered`});
            }

            const token = generateAccessToken(user._id, user);
            return res.json({token});

        } catch(e) {
            console.log(e);
            res.status(400).json({message:'Login error'});
        }
    }
    async checkToken(req, res) {

    }
}

module.exports = new authController();