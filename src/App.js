import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [opt1, setopt1] = useState('d');

  return (
    <div className="mainbg">
      <div className="main-style-bar-up">SELECT</div>
      <div className="main-style-bar-down">Let's Play..</div>
      {opt1 === 'd' && (
        <div className="center-box">
          <div onClick={() => setopt1('a')} className="first-options-bar1">
            <span>Fibonacci Series</span>
          </div>
          <div onClick={() => setopt1('b')} className="first-options-bar1">
            <span>Arithmetic Series</span>
          </div>
          <div onClick={() => setopt1('c')} className="first-options-bar1">
            <span>Geometric Series</span>
          </div>
        </div>
      )}
      {opt1 === 'a' && <div className="center-box"></div>}
    </div>
  );
}
