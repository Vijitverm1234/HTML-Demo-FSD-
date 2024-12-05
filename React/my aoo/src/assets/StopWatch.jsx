import React, { useEffect, useState } from 'react';
import './Stop.css';

function StopWatch() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleRestart = () => {
    setTime(0);
    setRunning(false);
    if (intervalId) clearInterval(intervalId);
  };

  const handleStart = () => {
    setRunning((prev) => !prev);
  };

  useEffect(() => {
    if (running) {
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      if (intervalId) clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [running]);

  const timeFormat = (time) => {
    const hour=Math.floor(time/3600)
    const min = Math.floor(time / 60);
    const second = Math.floor(time % 60);
    return `${hour<12?`0${hour}`:`${hour}`}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
  };

  return (
    <div>
      <h1>Stop Watch App</h1>
      <h1>{timeFormat(time)}</h1>
      <div className="btn">
        <button onClick={handleRestart}>Restart</button>
        <button onClick={handleStart}>{running ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
}

export default StopWatch;
