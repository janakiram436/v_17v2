import React from 'react';
import './Welcome.css'; // make sure this is the correct filename and path

const WellCome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome Back!</h1>
      <p className="welcome-message">You have successfully logged in.</p>
    </div>
  );
};

export default WellCome;
