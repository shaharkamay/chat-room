import express from 'express';
import User from '../database/models/user.js';
import Token from '../database/models/token.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET, ACCESS_TIME, REFRESH_TIME } = process.env;
const authRouter = express.Router();

// const {
//   login,
//   logout,
//   register,
//   token,
// } = require("../controllers/authController");

// import auth from '../middleware/auth-handler';

import { validateLogin, validateRegister } from '../middleware/validator.js';

authRouter.post("/login", validateLogin, async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if (!user) throw { status: 400, message: "No such email" };
        if (!(password === user.password))
            throw { status: 400, message: "Bad password" };

        const userId = user._id;
        console.log(ACCESS_TIME)
        const accessToken = jwt.sign({ email, userId }, JWT_SECRET, {
            expiresIn: ACCESS_TIME,
        });

        const refreshToken = jwt.sign({ userId, email }, JWT_SECRET, {
            expiresIn: REFRESH_TIME,
        });

        await Token.findOneAndUpdate(
        { userId },
        { jwt: refreshToken, userId },
        { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        res.send({ accessToken, refreshToken });
    } catch (err) {
        next(err);
    }
});

authRouter.post("/token", async (req, res, next) => {
    try {
        const { token } = req.body;

        if (!token) throw { status: 400, message: "Must provide a token" };

        const { email, userId } = jwt.verify(token, JWT_SECRET);

        const exists = await Token.findOne({ jwt: token });
        if (!exists) throw { status: 400, message: "Log in again" };
    
        const accessToken = jwt.sign({ email, userId }, JWT_SECRET, {
            expiresIn: ACCESS_TIME,
        });
    
        res.send({ accessToken, email, userId });
    } catch (err) {
        next(err);
    }
});
// authRouter.post("/register", validateRegister, register);
// authRouter.post("/logout", auth, logout);

export default authRouter;