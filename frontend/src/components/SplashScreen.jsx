import React from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="splash">
      <h1>RuneTable</h1>
      <h2>Master Your Encounters</h2>
      <button onClick={() => navigate('/tracker')}>Enter Initiative Tracker</button>
    </div>
  );
}

export default SplashScreen;
