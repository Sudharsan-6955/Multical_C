import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-sm sm:max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 px-4">🧮 Basic Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="bg-gray-100 p-3 sm:p-4 rounded mb-4">
            <input
              type="text"
              value={display}
              readOnly
              className="w-full text-right text-xl sm:text-2xl bg-transparent outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <button onClick={clear} className="col-span-2 bg-red-500 text-white p-3 sm:p-4 rounded hover:bg-red-600 active:bg-red-700 transition-colors text-sm sm:text-base font-semibold touch-manipulation">Clear</button>
            <button onClick={() => inputOperation('/')} className="bg-gray-300 p-3 sm:p-4 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">÷</button>
            <button onClick={() => inputOperation('*')} className="bg-gray-300 p-3 sm:p-4 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">×</button>

            <button onClick={() => inputNumber(7)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">7</button>
            <button onClick={() => inputNumber(8)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">8</button>
            <button onClick={() => inputNumber(9)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">9</button>
            <button onClick={() => inputOperation('-')} className="bg-gray-300 p-3 sm:p-4 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">-</button>

            <button onClick={() => inputNumber(4)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">4</button>
            <button onClick={() => inputNumber(5)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">5</button>
            <button onClick={() => inputNumber(6)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">6</button>
            <button onClick={() => inputOperation('+')} className="bg-gray-300 p-3 sm:p-4 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">+</button>

            <button onClick={() => inputNumber(1)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">1</button>
            <button onClick={() => inputNumber(2)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">2</button>
            <button onClick={() => inputNumber(3)} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">3</button>
            <button onClick={() => inputOperation('=')} className="row-span-2 bg-blue-500 text-white p-3 sm:p-4 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm sm:text-base font-semibold touch-manipulation">=</button>

            <button onClick={() => inputNumber(0)} className="col-span-2 bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">0</button>
            <button onClick={() => setDisplay(display + '.')} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">.</button>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-6 px-4">
          <Link to="/calculators" className="text-white underline hover:text-blue-200 inline-block py-2 px-4 rounded transition-colors text-sm sm:text-base">
            Back to Calculators
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
