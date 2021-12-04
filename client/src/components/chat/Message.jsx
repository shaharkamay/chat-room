function Message({ dir, user, content, timestamp }) {
    return (
        <div className={`message__container message__container--${dir}`}>
            <div className={`chat__message message--${dir}`}>
                <div className="message__user">
                    {user}
                </div>
                <div className="message__content">
                    {content}    
                </div>
                <div className="message__timestamp">
                    {timestamp}
                </div>

            </div>
        </div>
    )
}

export default Message
