import './chat.scss';
import ChatAside from './ChatAside';
import ChatBox from './ChatBox';

function Chat() {
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
