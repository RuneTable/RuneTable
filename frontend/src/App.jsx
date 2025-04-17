import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitiativeTracker from './components/InitiativeTracker';
import SplashScreen from './components/SplashScreen';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/tracker" element={<InitiativeTracker />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
