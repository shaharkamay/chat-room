import FormElement from './FormElement';
import './form.scss';

function Form({ containerClass, id, title, formElements, submitValue, handleSubmit }) {
    
    return (
        <div className={containerClass}>
            <form id={id} className="form" onSubmit={handleSubmit}>
                <h2>{title}</h2>
                {formElements.map(({ labelValue, type, id, placeholder, setState, handleBlur }, i) => 
                    <FormElement 
                        labelValue={labelValue} 
                        type={type} 
                        id={id} 
                        placeholder={placeholder}
                        key={`${i}`}
                        setState={setState}
                        onBlur={handleBlur}
                    />
                )}
                <div className="form-element">
                    <button className="default--button">{submitValue}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
