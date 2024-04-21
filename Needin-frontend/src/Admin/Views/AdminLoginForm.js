import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLoginForm.css'; // Import the CSS file

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockAdminEmail = 'admin@needin';
    const mockAdminPassword = 'admin@needin';

    if (email === mockAdminEmail && password === mockAdminPassword) {
      toast.success('Login successful!');
      setTimeout(() => {
        window.location.href = '/admin';
      }, 2000); // Redirect after 2 seconds
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLoginForm;
