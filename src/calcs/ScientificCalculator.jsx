import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ScientificCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);

  const inputNumber = (num) => {
    setDisplay(display === '0' ? String(num) : display + num);
  };

  const calculate = (expression) => {
    try {
      const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const scientificFunction = (func) => {
    const value = parseFloat(display);
    let result;

    switch (func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180);
        break;
      case 'log':
        result = Math.log10(value);
        break;
      case 'ln':
        result = Math.log(value);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'square':
        result = value * value;
        break;
      case 'factorial':
        result = factorial(value);
        break;
      default:
        result = value;
    }

    setDisplay(String(result));
  };

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const clear = () => setDisplay('0');

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-sm sm:max-w-lg mx-auto">
        <div className="flex items-center mb-6 sm:mb-8">
          <Link 
            to="/calculators" 
            className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-white ml-4 flex-1">🔬 Scientific Calculator</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="bg-gray-100 p-3 sm:p-4 rounded mb-4">
            <input
              type="text"
              value={display}
              readOnly
              className="w-full text-right text-xl sm:text-2xl bg-transparent outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-5 gap-1 sm:gap-2">
            <button onClick={() => scientificFunction('sin')} className="bg-orange-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-orange-400 active:bg-orange-500 transition-colors font-semibold touch-manipulation">sin</button>
            <button onClick={() => scientificFunction('cos')} className="bg-orange-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-orange-400 active:bg-orange-500 transition-colors font-semibold touch-manipulation">cos</button>
            <button onClick={() => scientificFunction('tan')} className="bg-orange-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-orange-400 active:bg-orange-500 transition-colors font-semibold touch-manipulation">tan</button>
            <button onClick={() => scientificFunction('log')} className="bg-orange-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-orange-400 active:bg-orange-500 transition-colors font-semibold touch-manipulation">log</button>
            <button onClick={() => scientificFunction('ln')} className="bg-orange-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-orange-400 active:bg-orange-500 transition-colors font-semibold touch-manipulation">ln</button>

            <button onClick={() => scientificFunction('sqrt')} className="bg-yellow-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-yellow-400 active:bg-yellow-500 transition-colors font-semibold touch-manipulation">√</button>
            <button onClick={() => scientificFunction('square')} className="bg-yellow-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-yellow-400 active:bg-yellow-500 transition-colors font-semibold touch-manipulation">x²</button>
            <button onClick={() => setDisplay(display + '**')} className="bg-yellow-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-yellow-400 active:bg-yellow-500 transition-colors font-semibold touch-manipulation">xʸ</button>
            <button onClick={() => setDisplay(String(Math.PI))} className="bg-yellow-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-yellow-400 active:bg-yellow-500 transition-colors font-semibold touch-manipulation">π</button>
            <button onClick={() => setDisplay(String(Math.E))} className="bg-yellow-300 p-2 sm:p-3 rounded text-xs sm:text-sm hover:bg-yellow-400 active:bg-yellow-500 transition-colors font-semibold touch-manipulation">e</button>

            <button onClick={() => inputNumber(7)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">7</button>
            <button onClick={() => inputNumber(8)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">8</button>
            <button onClick={() => inputNumber(9)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">9</button>
            <button onClick={() => setDisplay(display + '/')} className="bg-gray-300 p-2 sm:p-3 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">÷</button>
            <button onClick={clear} className="bg-red-500 text-white p-2 sm:p-3 rounded hover:bg-red-600 active:bg-red-700 transition-colors text-sm sm:text-base font-semibold touch-manipulation">C</button>

            <button onClick={() => inputNumber(4)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">4</button>
            <button onClick={() => inputNumber(5)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">5</button>
            <button onClick={() => inputNumber(6)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">6</button>
            <button onClick={() => setDisplay(display + '*')} className="bg-gray-300 p-2 sm:p-3 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">×</button>
            <button onClick={() => setDisplay(display + '(')} className="bg-purple-300 p-2 sm:p-3 rounded hover:bg-purple-400 active:bg-purple-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">(</button>

            <button onClick={() => inputNumber(1)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">1</button>
            <button onClick={() => inputNumber(2)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">2</button>
            <button onClick={() => inputNumber(3)} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">3</button>
            <button onClick={() => setDisplay(display + '-')} className="bg-gray-300 p-2 sm:p-3 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">-</button>
            <button onClick={() => setDisplay(display + ')')} className="bg-purple-300 p-2 sm:p-3 rounded hover:bg-purple-400 active:bg-purple-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">)</button>

            <button onClick={() => inputNumber(0)} className="col-span-2 bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">0</button>
            <button onClick={() => setDisplay(display + '.')} className="bg-gray-200 p-2 sm:p-3 rounded hover:bg-gray-300 active:bg-gray-400 transition-colors text-sm sm:text-base font-semibold touch-manipulation">.</button>
            <button onClick={() => setDisplay(display + '+')} className="bg-gray-300 p-2 sm:p-3 rounded hover:bg-gray-400 active:bg-gray-500 transition-colors text-sm sm:text-base font-semibold touch-manipulation">+</button>
            <button onClick={() => calculate(display)} className="bg-blue-500 text-white p-2 sm:p-3 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm sm:text-base font-semibold touch-manipulation">=</button>
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

export default ScientificCalculator;
