function Message({ dir }) {
    return (
        <div className={`message__container message__container--${dir}`}>
            <div className={`chat__message message--${dir}`}>
                <div className="message__user">
                    dana@gmail.com
                </div>
                <div className="message__content">
                    kjsdodnsjkfnfdsjkn kdsfnjdsnfjdsknfkdj hkabnsdijnadsjkfndkaj kh djsknfisdjnfjsk kdjfnjdsfankjdsf kdsf kdjfndfjknadfkjndfaksj  asjndasjndaj hkkjsadn adsbfhjadsbffabjh
                </div>
                <div className="message__timespan">
                    16:31
                </div>

            </div>
        </div>
    )
}

export default Message
