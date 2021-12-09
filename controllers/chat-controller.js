import Message from '../database/models/message.js';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();
let online = [];

const sendMessage = async (req, res, next) => {
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
}

const getAllMessages = async (req, res, next) => {
    const sendOnlineUsers = () => {
        res.write(`data: ${JSON.stringify({ online })} \n\n`);
    }

    try {
        if(!online.includes(req.user.email)) {
            online.push(req.user.email);
        }

        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            Connection: "Keep-Alive",
        })

        emitter.addListener('online', sendOnlineUsers);
        emitter.emit('online');

        const messages = await Message.find({});

        res.write(`data: ${JSON.stringify({ messages })} \n\n`);

        emitter.on('message', (newMessage) => {
            res.write(`data: ${JSON.stringify({ newMessage })} \n\n`);
        })
        
        req.on('close', () => {
            online = online.filter(email => email !== req.user.email);
            emitter.emit('online');
        })
        
    } catch (err) {
        
        next(err);
    }
}

export { sendMessage, getAllMessages };