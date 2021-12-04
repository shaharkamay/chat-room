import Message from "./Message"
import SendMessage from "./SendMessage"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import useAxios from '../network/useAxios'
import { useNavigate } from "react-router";



function ChatBox() {
    const { email } = useContext(AuthContext);
    
    const { data: messages, isPending, error } = useAxios({
        url: `/api/chat/message`,
        method: 'get',
    });

    return (
        <div className="chat__box--container">
            <SendMessage />
            <div className="chat__box">
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
    )
}

export default ChatBox
