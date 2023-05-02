import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './welcome.css';

const Welcome = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate('/main');
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">SKULLZ GAMZZ</h1>
      <button className="welcome-button" onClick={handleButtonClick}>
        Enter?
      </button>
    </div>
  );
}

export default Welcome;
