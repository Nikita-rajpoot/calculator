import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handleFunctionClick = (func) => {
    setInput(func + '(');
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  const slice = () => {
    setResult(result.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input).toString();
      setResult(calculatedResult);
      setHistory([...history, { input, result: calculatedResult }]);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container">
      <div className="Calc" id="calculator">
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.input} = {item.result}
            </li>
          ))}
        </ul>
        <button onClick={clearHistory}>Clear History</button>
      </div>
      <div className="display">
        {result !== '' ? result : input}
      </div>
        <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
