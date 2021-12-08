import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  try {
    const token = req.headers.auth;

    if (!token) throw { status: 403, message: "Auth error" };
    const { email, userId } = jwt.verify(token, JWT_SECRET);

    req.user = { email, userId };
    next();
  } catch (error) {
    //TODO add check if jwt error
    next(error);
  }
};

export default auth;