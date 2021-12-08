import express from 'express';
import { sendMessage, getAllMessages } from '../controllers/chat-controller.js';





const chatRouter = express.Router();

chatRouter.post("/message", sendMessage)

chatRouter.get("/message", getAllMessages)

export default chatRouter;