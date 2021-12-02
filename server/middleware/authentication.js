import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// not working for some reasons
const authUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return next({ status: 404, message: 'Token not found' });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return next({ status: 401, message: 'Unauthorized token' });
        // req.user = user; //??????
        next(); 
    })
}

// const unAuthUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if(!token) return next();
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return next();
//         next({ status: 401, message: 'Cannot access this page when you already logged in!' }); 
//     })
// }

export default authUser;