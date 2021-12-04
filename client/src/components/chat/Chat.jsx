import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import './chat.scss';
import ChatAside from './ChatAside';
import ChatBox from './ChatBox';

function Chat() {
    // const { email, loggedIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(!loggedIn) navigate('/');
    // }, [loggedIn, useNavigate])

    return (
        <div className="chat">
            <div className="chat-container">
                <ChatAside />
                <ChatBox />
            </div>
        </div>
    )
}

export default Chat
