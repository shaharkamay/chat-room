function FormElement({ labelValue, type, id, placeholder }) {
    return (
        <div className="form-element">
            <label htmlFor={id}>{labelValue}</label>
            <input id={id} type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormElement
