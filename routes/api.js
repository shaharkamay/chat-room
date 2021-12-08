import express from 'express';
import auth from '../middleware/auth-handler.js';

import chatRouter from './chat.js';
import authRouter from './auth.js';

// import { eventsHandler } from '../controllers/eventsController';


const apiRoute = express.Router();

apiRoute.use("/auth", authRouter);
apiRoute.use("/chat", auth, chatRouter);
// apiRoute.get("/events", auth, eventsHandler);

export default apiRoute;