//!Fatime

import React, { useState } from 'react';
import './LoginPage.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("okkey")
                navigate('/adminpanel');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                    alert('Invalid username or password. Please try again.');
                } else {
                    alert("Invalid username or password. Please try again.")
                }
            });

    };
    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };
    return (


        <div className="login-form-container">
            <button className={`buttonLogin ${showForm ? 'hide' : ''}`} onClick={toggleFormVisibility}>
                Login
            </button>
            <form onSubmit={handleSubmit} className={`login-form ${showForm ? 'show' : ''}`}>
                <label htmlFor="username">Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username or email"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />

                {error && <div className="error">{error}</div>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;


