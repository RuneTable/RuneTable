import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InitiativeTracker from './components/InitiativeTracker';
import SplashScreen from './components/SplashScreen';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <Link to="/" className="app-title">RuneTable</Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tracker">Initiative Tracker</Link></li>
              <li><Link to="/comingsoon">Coming Soon</Link></li>
            </ul>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/tracker" element={<InitiativeTracker />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </main>
        <footer className="app-footer">
          © 2025 RuneTable | © 2025 Tylor Lenskold
        </footer>
      </div>
    </Router>
  );
}

export default App;
