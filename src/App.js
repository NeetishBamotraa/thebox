import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [opt1, setopt1] = useState('d');

  return (
    <div className="mainbg">
      <div className="homebtn" onClick={() => setopt1('d')}>
        Home
      </div>
      <div className="main-style-bar-up">
        {opt1 === 'd' && <span>SELECT</span>}
        {opt1 === 'a' && <span>Choose Correctly</span>}
        {opt1 === 'b' && <span>Choose Correctly</span>}
        {opt1 === 'c' && <span>Choose Correctly</span>}
      </div>
      <div className="main-style-bar-down">
        {opt1 === 'd' && <span>Let's Play..</span>}
        {opt1 === 'a' && <span>Fibonacci</span>}
        {opt1 === 'b' && <span>Arithmetic</span>}
        {opt1 === 'c' && <span>Geometric</span>}
      </div>
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
      {opt1 === 'a' && (
        <div className="center-box">
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
          <div className="small-box"></div>
        </div>
      )}
    </div>
  );
}
