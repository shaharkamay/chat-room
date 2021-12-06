import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import './chat.scss';
import ChatAside from './ChatAside';
import ChatBox from './ChatBox';
import { EventSourcePolyfill  } from 'event-source-polyfill';

function Chat() {
    const { accessToken, loggedIn } = useContext(AuthContext);

    const [messages, setMessages] = useState([]);

    const [online, setOnline] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(!loggedIn) navigate('/');
        const source = new EventSourcePolyfill("http://localhost:8080/api/chat/message", {
            headers: { "Content-Type": "text/event-stream", auth: accessToken },
        });

        source.onopen = async function () {
            console.log("connection to stream has been opened");
        };
        source.onerror = function (error) {
            console.log("An error has occurred while receiving stream", error);
        };
        source.onmessage = function (event) {
            const data = JSON.parse(event.data);
            if(data.messages) {
                setMessages(data.messages)
            }
            if(data.newMessage) {
                setMessages(messages => [...messages, data.newMessage]);
            }
            if(data.online) {
                setOnline(data.online)
            }
        };
    }, [])

    return (
        <div className="chat">
            <div className="chat-container row-large">
                <ChatAside online={online} />
                <ChatBox messages={messages} />
            </div>
        </div>
    )
}

export default Chat
