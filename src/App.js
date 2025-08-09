import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [numbersList, setNumbersList] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  const handleAddToList = () => {
    if (counter > 0) {
      setNumbersList(prev => [...prev, counter]);
      setCounter(0);
    }
  };

  const toggleSort = () => {
    const sorted = [...numbersList].sort((a, b) =>
      isAscending ? a - b : b - a
    );
    setNumbersList(sorted);
    setIsAscending(!isAscending);
  };

  const handleDelete = index => {
    const updated = numbersList.filter((_, i) => i !== index);
    setNumbersList(updated);
  };

  const handleReset = () => {
    setNumbersList([]);
  };

  return (
    <div className="app">
      <h1>Counter & List App</h1>

      <div className="counter-section">
        <p className="section-title">Counter</p>
        <div className="counter-controls">
          <button onClick={() => setCounter(prev => Math.max(prev - 1, 0))}>−</button>
          <span className="counter-value">{counter}</span>
          <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
        <button className="add-button" onClick={handleAddToList}>
          Add to List
        </button>
      </div>

      <div className="list-section">
        <div className="list-header">
          <p className="section-title">Numbers List</p>
          <div>
            <button className="reset-button" onClick={handleReset}>Reset</button>
            <button className="sort-button" onClick={toggleSort}>
              Sort {isAscending ? '↓' : '↑'}
            </button>
          </div>
        </div>

        <div className="numbers-container">
          {numbersList.map((num, index) => (
            <div key={index} className="number-item">
              <span>{num}</span>
              <button onClick={() => handleDelete(index)}>×</button>
            </div>
          ))}
        </div>

        <p className="total-count">Total numbers: {numbersList.length}</p>
      </div>
    </div>
  );
}

export default App;
