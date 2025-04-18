import React from 'react';
import { Link } from 'react-router-dom';

function SplashScreen() {
  return (
    <div className="splash-container">
      <h1>Welcome to RuneTable</h1>
      <p>Master Your Encounters</p>
      <Link to="/tracker" className="enter-button">Enter Initiative Tracker</Link>
    </div>
  );
}

export default SplashScreen;
