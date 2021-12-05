import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { login, logout, signUp, token } from '../controllers/auth-controller.js';
import { validateLogin, validateSignUp } from '../middleware/validator.js';
import auth from '../middleware/auth-handler.js';

const { JWT_SECRET, ACCESS_TIME, REFRESH_TIME } = process.env;
const authRouter = express.Router();

authRouter.post("/login", validateLogin, login);
authRouter.post("/token", token);
authRouter.post("/sign-up", validateSignUp, signUp)
authRouter.post("/logout", auth, logout);

export default authRouter;