import FormElement from './FormElement';
import InvalidMessage from './InvalidMessage';
import './form.scss';

function Form({ containerClass, id, title, formElements, submitValue, handleSubmit }) {
    
    return (
        <div className={containerClass}>
            <form id={id} className="form" onSubmit={handleSubmit}>
                <h2>{title}</h2>
                {formElements.map(({ labelValue, type, id, placeholder }, i) => 
                    <FormElement 
                        labelValue={labelValue} 
                        type={type} 
                        id={id} 
                        placeholder={placeholder}
                        key={`${i}`}
                    />
                )}
                <div className="form-element">
                    <button className="default--button">{submitValue}</button>
                </div>
                <InvalidMessage id="invalid-message" />
            </form>
        </div>
    )
}

export default Form
