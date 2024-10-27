import React, { useState } from 'react';
import './Auth.css'; 
import logo from '../../assets/star-logo.png';
import emailjs from 'emailjs-com';

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    employeeId: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Generate a 5-digit unique corporate ID
  const generateCorporateID = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  // Send corporate ID via email
  const sendCorporateIdByEmail = (corporateID) => {
    const emailParams = {
      name: formData.name,
      email: formData.email,
      corporateID: corporateID,
    };

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
      .then(() => {
        console.log('Corporate ID sent to email.');
        alert('Corporate ID has been sent to your email. Please use it to log in.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send corporate ID. Please try again.');
      });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === 'signup') {
      const corporateID = generateCorporateID(); // Generate the 5-digit corporate ID
      console.log("Team Lead Signup:", formData);

      // Send corporate ID to the team lead's email
      sendCorporateIdByEmail(corporateID);

      // Store the corporate ID in session storage for future use
      sessionStorage.setItem('corporateID', corporateID);

      // Redirect the team lead to the login page or another verification page
      window.location.href = '/verify-corporate-id';

    } else if (activeTab === 'login') {
      console.log("Team Lead Login:", formData);

      // Compare the entered employeeId with the stored corporate ID
      const storedCorporateID = sessionStorage.getItem('corporateID');
      if (formData.employeeId === storedCorporateID) {
        alert("Login successful");
        window.location.href = '/dashboard'; // Redirect to the team lead dashboard
      } else {
        alert("Invalid Corporate ID. Please check your email.");
      }
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
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {activeTab === 'signup' && (
              <div className="signup-form">
                <h2>Team Lead Signup</h2>
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
                <h2>Team Lead Login</h2>
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
                  <label>Corporate Code (5-digit):</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
