import express from 'express';
import Message from '../database/models/message.js';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();
// const {
//   sendMessage,
//   getAllMessages,
// } = require("../controllers/chatController");

const chatRouter = express.Router();

chatRouter.post("/message", async (req, res, next) => {
    try {
        const message = {
            email: req.user.email,
            content: req.body.content,
            timestamp: Date.now(),
        }
        const { email, content, timestamp } = message;
        await Message.create({ email, content, timestamp });
        res.status(200).send("Message Sent");
        emitter.emit('message', { email, content, timestamp });
    } catch (err) {
        next(err);
    }
});

chatRouter.get("/message", async (req, res, next) => {
    try {
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            Connection: "Keep-Alive",
        })
        const messages = await Message.find({});
        res.write(`data: ${JSON.stringify({ messages })} \n\n`);
        emitter.on('message', (newMessage) => {
            res.write(`data: ${JSON.stringify({ newMessage })} \n\n`);
        })
        
    } catch (err) {
        next(err);
    }
});

// chatRoute.get("/message", getAllMessages);

export default chatRouter;