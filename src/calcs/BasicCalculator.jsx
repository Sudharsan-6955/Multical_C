import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const inputNumber = (num) => {
    if (isNewCalculation) {
      setDisplay(String(num));
      setExpression(String(num));
      setIsNewCalculation(false);
    } else {
      const newDisplay = display === '0' ? String(num) : display + num;
      setDisplay(newDisplay);
      setExpression(expression + num);
    }
  };

  const inputOperation = (operation) => {
    if (operation === '=') {
      try {
        const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        setDisplay(String(result));
        setExpression(String(result));
        setIsNewCalculation(true);
      } catch (error) {
        setDisplay('Error');
        setExpression('');
        setIsNewCalculation(true);
      }
    } else {
      const operatorSymbol = operation === '*' ? '×' : operation === '/' ? '÷' : operation;
      
      if (!isNewCalculation) {
        const newExpression = expression + operatorSymbol;
        setExpression(newExpression);
        setDisplay(newExpression);
      } else {
        // If starting new calculation after equals, use current display
        const newExpression = display + operatorSymbol;
        setExpression(newExpression);
        setDisplay(newExpression);
        setIsNewCalculation(false);
      }
    }
  };

  const inputDecimal = () => {
    if (isNewCalculation) {
      setDisplay('0.');
      setExpression('0.');
      setIsNewCalculation(false);
    } else {
      // Check if current number already has a decimal
      const lastNumberMatch = expression.match(/[0-9]*\.?[0-9]*$/);
      if (lastNumberMatch && !lastNumberMatch[0].includes('.')) {
        const newExpression = expression + '.';
        setExpression(newExpression);
        setDisplay(newExpression);
      }
    }
  };

  const clear = () => {
    setDisplay('0');
    setExpression('');
    setIsNewCalculation(true);
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
            <button onClick={inputDecimal} className="bg-gray-200 p-3 sm:p-4 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">.</button>
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
