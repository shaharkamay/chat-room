function ChatAside({ online }) {
    return (
        <aside className="chat__aside">
            {online.map((email, i) => {
                return (
                    <div className="aside__user">
                        <div className="online-circle"></div>
                        <div className="aside__user--email" key={i} >{email}</div>
                    </div>
                )
            })}
        </aside>
    )
}

export default ChatAside
