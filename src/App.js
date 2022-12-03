import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [opt1, setopt1] = useState('d');
  const [process, setprocess] = useState(0);
  const [check, setcheck] = useState(-1);
  const [correctopt, setcorrectopt] = useState(0);
  const [fib, setfib] = useState(1);
  const [fibprev, setfibprev] = useState(0);
  const [arth, setarth] = useState(0);
  const [arthd, setarthd] = useState(2);
  const [geo, setgeo] = useState(1);
  const [score, setscore] = useState(0);

  const gotohome = () => {
    setprocess(1);
    setopt1('d');
    setcheck(-1);
    setcorrectopt(0);
    setfib(0);
    setarth(0);
    setgeo(1);
    setscore(0);
  };

  useEffect(() => {
    let inter = null;
    if (window) {
      if (check !== -1) {
        setprocess(0);

        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
          (ele) =>
            (document.getElementById(`small-box-${ele}`).style.backgroundColor =
              '#2e1114')
        );
        if (check === correctopt) {
          document.getElementById(`small-box-${check}`).style.backgroundColor =
            'yellow';
        } else {
          document.getElementById(`small-box-${check}`).style.backgroundColor =
            'red';
        }

        // console.log('fib--' + fib);
        // console.log('geo--' + geo);
        // console.log('arth--' + arth);
        // console.log('correctopt--' + correctopt);

        inter = setTimeout(() => {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(
            (ele) =>
              (document.getElementById(
                `small-box-${ele}`
              ).style.backgroundColor = '#2e1114')
          );
          console.log(check);
          setcheck(-1);

          if (check === correctopt) {
            if (opt1 === 'a') {
              let val1 = fib;
              let val2 = fibprev;

              setfib(val1 + val2);
              setcorrectopt((val1 + val2) % 9);
              setfibprev(val1);

              let sc = score;

              if (sc === 0) {
                setscore(1);
              } else {
                setscore(Math.round(sc + sc * 1.13));
              }
            } else if (opt1 === 'b') {
              let val = arth + arthd;
              setarth(val);
              setarthd(val % 9);
              setcorrectopt(val % 9);

              let sc = score;

              if (sc === 0) {
                setscore(1);
              } else {
                setscore(Math.round(sc + sc * 1.26));
              }
            } else if (opt1 === 'c') {
              let val = geo * 131;
              setgeo(val % 9);
              setcorrectopt(val % 9);

              let sc = score;

              if (sc === 0) {
                setscore(1);
              } else {
                setscore(Math.round(sc + sc * 1.51));
              }
            }

            setprocess(1);
          }
        }, 1000);
      }
    }

    return () => {
      clearTimeout(inter);
    };
  }, [check, correctopt]);

  useEffect(() => {
    let proInt = null;
    let extra = opt1;
    if (process === 1) {
      setopt1('p');
      proInt = setTimeout(() => {
        setopt1(extra);
        setprocess(0);
      }, 1000);
    }

    // else if (process === 0) {
    //   setopt1(extra);
    // }

    return () => {
      clearTimeout(proInt);
    };
  }, [process]);

  return (
    <div className="mainbg">
      <div className="homebtn" onClick={() => gotohome()}>
        Home
      </div>
      {opt1 !== 'd' && <div className="score">Score: {score}</div>}
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
      {opt1 !== 'd' && (
        <div className="center-box">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((ele) => (
            <div
              id={`small-box-${ele}`}
              onClick={() => setcheck(ele)}
              className="small-box"
              key={ele}
            >
              {ele}
            </div>
          ))}
        </div>
      )}
      {opt1 === 'p' && (
        <div className="center-box">
          <div className="processbar1"></div>
          <div className="processbar2"></div>
        </div>
      )}
    </div>
  );
}
