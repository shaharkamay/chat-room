import Message from "./Message"

function ChatBox() {
    return (
        <div className="chat__box">
            <Message dir="left" />
            <Message dir="left" />
            <Message dir="left" />
            <Message dir="left" />
            <Message dir="left" />
            <Message dir="right" />
            <Message dir="right" />
            <Message dir="right" />
            <Message dir="right" />
            <Message dir="right" />
            
        </div>
    )
}

export default ChatBox
