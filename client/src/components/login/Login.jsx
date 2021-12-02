import Form from "../form/Form"
import './login.scss';

function Login() {
    const formElements = [
        {
            labelValue: "Email",
            type: "email",
            id: "email",
            placeholder: "Enter Email",
        },
        {
            labelValue: "Password",
            type: "password",
            id: "password",
            placeholder: "Enter Password",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('heaha')
    }

    return (
        <Form 
            containerClass="log-in-container" 
            id="log-in-form" 
            title="Log In" 
            formElements={formElements} 
            submitValue="Log In" 
            handleSubmit={handleSubmit} 
        />
    )
}

export default Login
