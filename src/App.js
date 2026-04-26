import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button 
          onClick={() => setShowPopup(true)}
          className="rainbow-button"
        >
          Jednorožec
        </button>

        {showPopup && (
          <div className="popup-overlay" onClick={() => setShowPopup(false)}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img 
                src="/unicorn.jpg" 
                alt="Jednorožec" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '70vh', 
                  objectFit: 'contain',
                  borderRadius: '8px' 
                }}
              />
              <br />
              <button 
                onClick={() => setShowPopup(false)}
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Zavřít
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
