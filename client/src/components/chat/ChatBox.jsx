import Message from "./Message"
import SendMessage from "./SendMessage"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import useAxios from '../network/useAxios'
import { useNavigate } from "react-router";
import { EventSourcePolyfill  } from 'event-source-polyfill';

function ChatBox({ messages }) {
    const { email } = useContext(AuthContext);
    return (
        <div className="chat__box--container">
            <div className="chat__box">
                <div className="chat__box--messages">
                    {messages && messages.map((message, i) => {
                        return (
                            <Message 
                                dir={email === message.email ? 'right' : 'left'}
                                user={message.email}
                                content={message.content}
                                timestamp={new Date(Number(message.timestamp)).toLocaleString()}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>
            <SendMessage />
        </div>
    )
}

export default ChatBox
