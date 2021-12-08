import User from '../database/models/user.js';
import Token from '../database/models/token.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET, ACCESS_TIME, REFRESH_TIME } = process.env;

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if (!user) throw { status: 400, message: "No such email" };
        if (!(password === user.password))
            throw { status: 400, message: "Bad password" };

        const userId = user._id;

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
}

const token = async (req, res, next) => {
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
}

const signUp = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        
        const exists = await User.find({ email });

        if(exists.length > 0) throw { status: 400, message: "email already exists" };

        await User.create({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        });

        res.send({ isSignedUp: true });
    } catch (err) {
        next(err);
    }
}

const logout = async (req, res, next) => {
    try {
        const { userId } = req.user;
        await Token.deleteOne({ userId });
        res.send(200);
    } catch (err) {
        next(err);
    }
}

export { login, token, signUp, logout };