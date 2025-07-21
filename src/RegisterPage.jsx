import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    id: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: '' // clear error while typing
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!userDetails.name.trim()) newErrors.name = 'Name is required';
    if (!userDetails.id.trim()) newErrors.id = 'ID is required';
    if (!userDetails.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!userDetails.password.trim()) newErrors.password = 'Password is required';
    if (!userDetails.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (userDetails.password !== userDetails.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const sendUserData = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem('userdetail', JSON.stringify(userDetails));
    navigate('/signin');
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Register Form</h1>
      <form className="signup-form" onSubmit={sendUserData}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Id:</label>
          <input
            type="text"
            name="id"
            value={userDetails.id}
            onChange={handleInputChange}
          />
          {errors.id && <p className="error-msg">{errors.id}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && <p className="error-msg">{errors.confirmPassword}</p>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

        <button className="submit-btn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
