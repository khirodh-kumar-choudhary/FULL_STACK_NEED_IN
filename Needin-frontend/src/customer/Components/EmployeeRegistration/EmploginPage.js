// LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            // Send login request
            const response = await axios.post("http://localhost:5454/api/v1/employee/login", loginData);
            const token = response.data;
            // Store token in local storage
            localStorage.setItem('token', token);
            // Redirect to dashboard or homepage
            window.location.href = '/Employee';
        } catch (error) {
            console.error("Login failed:", error);
            setError("Invalid email or password");
        }
    };

    const handleRegisterRedirect = () => {
        window.location.href = '/EmployeeRegisterForm';
    };

    return (
        <div className="container mt-4">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter Email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <button className="btn btn-primary" onClick={handleRegisterRedirect}>Don't Have Account , Register</button>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
        </div>
    );
}

export default LoginPage;
