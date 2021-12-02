import { useState } from "react"
import InvalidMessage from "./InvalidMessage"

function FormElement({ labelValue, type, id, placeholder, setState, onBlur }) {
    const [error, setError] = useState();
    return (
        <div className="form-element">
            <label htmlFor={id}>{labelValue}</label>
            <input 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                onChange={e => setState(e.target.value)} 
                onBlur={e => onBlur(e, setError)} 
            />
            <InvalidMessage id={`${id}-invalid-message`} value={error} />
        </div>
    )
}

export default FormElement
