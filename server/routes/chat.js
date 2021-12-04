import express from 'express';
import Message from '../database/models/message.js';

// const {
//   sendMessage,
//   getAllMessages,
// } = require("../controllers/chatController");

const chatRouter = express.Router();

chatRouter.post("/message", async (req, res, next) => {
    try {
        const { content } = req.body;
        await Message.create({
            email: req.user.email,
            content,
            timestamp: Date.now(),
        });
        res.status(200).send("Message Sent");
    } catch (err) {
        next(err);
    }
});

chatRouter.get("/message", async (req, res, next) => {
    try {
        const messages = await Message.find({});
        res.status(200).send(messages);
    } catch (err) {
        next(err);
    }
});

// chatRoute.get("/message", getAllMessages);

export default chatRouter;