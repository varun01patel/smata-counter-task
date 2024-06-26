import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(60); // default time 60 seconds
  const [running, setRunning] = useState(false);
  const [inputValue, setInputValue] = useState(60);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      setRunning(false);
    }
    return () => clearTimeout(timer);
  }, [running, time]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSetTime = () => {
    setTime(Number(inputValue));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
        <div className="text-4xl mb-4">{time}s</div>
        <div className="mb-4">
          <input
            type="number"
            className="border p-2 rounded mr-2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded mr-2"
            onClick={handleSetTime}
          >
            Set Time
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 text-white p-2 rounded mr-2"
            onClick={handleStartStop}
          >
            {running ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleReset}
          >
            <i className="fas fa-stop"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
