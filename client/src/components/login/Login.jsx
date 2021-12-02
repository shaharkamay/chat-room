import { useState } from "react";
import Form from "../form/Form"
import './login.scss';
import validator from 'validator';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const formElements = [
        {
            labelValue: "Email",
            type: "email",
            id: "email",
            placeholder: "Enter Email",
            setState: setEmail,
            handleBlur: (e, setError) => {
                if(!validator.isEmail(e.target.value)) {
                    setError('Invalid email');
                } else setError('');
            }
        },
        {
            labelValue: "Password",
            type: "password",
            id: "password",
            placeholder: "Enter Password",
            setState: setPassword,
            handleBlur: (e, setError) => {
                if(!validator.isStrongPassword(e.target.value, { minSymbols: 0 })) {
                    setError('Password must contain at least one uppercase, one lowercase and one number');
                } else setError('');
            }
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
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
