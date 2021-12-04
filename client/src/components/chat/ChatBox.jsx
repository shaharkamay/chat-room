import Message from "./Message"
import SendMessage from "./SendMessage"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import useAxios from '../network/useAxios'
import { useNavigate } from "react-router";
import { EventSourcePolyfill  } from 'event-source-polyfill';



// const source = new EventSource("http://localhost:8080/api/chat/message", {
//         headers: { "Content-Type": "text/event-stream" },
//     });
function ChatBox() {
    const { email, accessToken } = useContext(AuthContext);
    // let source;
    // useEffect(() => {
    //     source = new EventSource("http://localhost:8080/api/chat/message", {
    //         headers: { "Content-Type": "text/event-stream", auth: accessToken },
    //     });
    // }, [])
    
    // const source = new EventSource("http://localhost:8080/api/chat/message", {
    //     headers: { "Content-Type": "text/event-stream" },
    // });
    // const { data: messages, setData: setMessages, isPending, error } = useAxios({
    //     url: `/api/chat/message`,
    //     method: 'get',
    // });

    const [messages, setMessages] = useState([]);
    

    useEffect(() => {
        const source = new EventSourcePolyfill("http://localhost:8080/api/chat/message", {
            headers: { "Content-Type": "text/event-stream", auth: accessToken },
        });

        source.onopen = async function () {
            console.log("connection to stream has been opened");
            // await axios.post(`http://localhost:3001/addOnlineUser/${userName}`);
        };
        source.onerror = function (error) {
            console.log("An error has occurred while receiving stream", error);
        };
        source.onmessage = function (event) {
            // const users = JSON.parse(event.data).users;
            const data = JSON.parse(event.data);
            if(data.messages) {
                setMessages(data.messages)
            }
            if(data.newMessage) {
                setMessages(messages => [...messages, data.newMessage]);
            }
        };      
    }, [])

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
