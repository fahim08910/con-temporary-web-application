"use client";

import { useState } from 'react';
import { useFormState } from 'react-dom';
import logInAction from '../actions/logIn';

function LoginForm() {
    const [state, actionLogin] = useFormState(logInAction);
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        try {
            const result = await actionLogin(formData);
            
            setLoginMessage(result.message || 'Login successful!');
        } catch (error) {
            setLoginMessage('Login failed: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                Username: <br />
                <input name='username' id='username' /><br />
                Password: <br />
                <input type='password' name='password' id='password' /><br />
                <input type='submit' value='Login' />
            </form>
            {loginMessage && <div>{loginMessage}</div>}
        </div>
    );
}

export default LoginForm;
