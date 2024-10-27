import React, { useState } from 'react';
import './Auth.css'; 
import logo from '../../assets/star-logo.png'
import { auth } from '../../../firebase/firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginSignup = () => {
    // fire base attached from here 
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    employeeId: '',
    password: '',
    email: '', 
    adminPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'signup') {
      console.log("Participant Sign Up form submitted", formData);
    } else if (activeTab === 'login') {
      console.log("Employee Login form submitted", formData);
    } else if (activeTab === 'admin') {
      console.log("Admin Login form submitted", formData);

    }
  };

  return (
    <div className="landing-page">
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
                <h2 className="logo-text">STARTEAM ENTERPRISES</h2>
            </div>
        </div>
       
    <div className="login-signup-container">
      <div className="tabs">
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Team Lead
        </button>
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          Judges
        </button>
        <button
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <div className="signup-form">
              <h2>Team Lead Login</h2>
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
                <label>Department:</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>
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
              <button type="submit">Next</button>
            </div>
          )}

          {activeTab === 'login' && (
            <div className="login-form">
              <h2>Judges</h2>
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
              <h2>Admin</h2>
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
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div> 
              <button type="submit">Next</button>
            </div>
          )}
        </form>
      </div>
    </div>
    </div>  
  );
};

export default LoginSignup;
