function InvalidMessage({ id, value }) {
    return (
        <span className="invalid-message" id={id}>{value || ''}</span>
    )
}

export default InvalidMessage
