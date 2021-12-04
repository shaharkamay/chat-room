function Message({ dir, user, content, timestamp }) {
    return (
        <div className={`message__container message__container--${dir}`}>
            <div className={`chat__message message--${dir}`}>
                <div className="message__user" style={{color: generateUserColor(user)}}>
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

const generateUserColor = (user) => {
    const colors = ["#e69f73", "#db5ec2", "#35cd96", "#91ab01", "#6bcbef", "#dfb610", "#00b33e", "#fd85d4", "#e67072", "#ba33dc", "#c69478", "#bd88eb", "#8b7add", "#fe7c7f", "#3bdec3", "#e68200"]
    
    let hash = 0;
    if (user.length === 0) return hash;
    for (let i = 0; i < user.length; i++) {
        hash = user.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    hash = ((hash % colors.length) + colors.length) % colors.length;
    return colors[hash];
}

export default Message
