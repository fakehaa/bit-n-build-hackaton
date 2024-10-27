import React, { useState } from 'react';
import './Auth.css'; // For styling (you can create this file as well)

const LoginSignup = () => {
  // State to manage active tab
const [activeTab, setActiveTab] = useState('signup'); // default is signup
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    employeeId: '',
    adminPassword: '',
});

  // Handle form input changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'signup') {
        console.log("Sign Up form submitted", formData);
    } else if (activeTab === 'login') {
        console.log("Employee Login form submitted", formData);
    } else if (activeTab === 'admin') {
        console.log("Admin Login form submitted", formData);
    }
};

return (
    <div className="login-signup-container">
        <div className="tabs">
            <button 
            className={activeTab === 'signup' ? 'active' : ''}
            onClick={() => setActiveTab('signup')}
        >
        Sign Up/Register
        </button>
            <button 
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
        >
            Employee Login
            </button>
        <button 
            className={activeTab === 'admin' ? 'active' : ''}
            onClick={() => setActiveTab('admin')}
        >
        Admin Login
        </button>
    </div>

      {/* Conditional Rendering for Forms */}
        <form className='auth' onSubmit={handleSubmit}>
        {activeTab === 'signup' && (
            <div className="signup-form">
            <h2>Sign Up</h2>
            <div>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Sign Up</button>
            </div>
        )}

        {activeTab === 'login' && (
            <div className="login-form">
            <h2>Employee Login</h2>
            <div>
                <label>Employee ID:</label>
                <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </div>
        )}

        {activeTab === 'admin' && (
            <div className="admin-form">
            <h2>Admin Login</h2>
            <div>
                <label>Admin Username:</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                type="password"
                name="adminPassword"
                value={formData.adminPassword}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </div>
        )}
        </form>
    </div>
);
};

export default LoginSignup;
