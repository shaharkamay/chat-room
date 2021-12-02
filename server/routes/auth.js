import express from 'express';
const authRouter = express.Router();

// const {
//   login,
//   logout,
//   register,
//   token,
// } = require("../controllers/authController");

// import auth from '../middleware/auth-handler';

import { validateLogin, validateRegister } from '../middleware/validator.js';

authRouter.post("/login", validateLogin, (req, res) => {
    console.log('haha yeah')
    res.json('yeahhhhh')
});
// authRouter.post("/token", token);
// authRouter.post("/register", validateRegister, register);
// authRouter.post("/logout", auth, logout);

export default authRouter;