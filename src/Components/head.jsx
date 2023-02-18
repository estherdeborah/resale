import React, { useState } from 'react';
import logo from '../Assets/Logoretinklogo.jpg';
import './head.css';

function App() {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleLangDropdown = () => {
    setShowLangDropdown(!showLangDropdown);
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FP</a></li>
          <li className="lang">
            <a href="#" onClick={toggleLangDropdown}>English</a>
            {showLangDropdown && (
              <ul className="lang-dropdown">
                <li><a href="#">Español</a></li>
                <li><a href="#">Français</a></li>
                <li><a href="#">Deutsch</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
