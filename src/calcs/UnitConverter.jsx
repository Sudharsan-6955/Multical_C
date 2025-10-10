import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('feet');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const conversions = {
    length: {
      meter: { feet: 3.28084, inch: 39.3701, yard: 1.09361, kilometer: 0.001, centimeter: 100 },
      feet: { meter: 0.3048, inch: 12, yard: 0.333333, kilometer: 0.0003048, centimeter: 30.48 },
      inch: { meter: 0.0254, feet: 0.0833333, yard: 0.0277778, kilometer: 0.0000254, centimeter: 2.54 }
    },
    weight: {
      kilogram: { pound: 2.20462, ounce: 35.274, gram: 1000, ton: 0.001 },
      pound: { kilogram: 0.453592, ounce: 16, gram: 453.592, ton: 0.000453592 },
      gram: { kilogram: 0.001, pound: 0.00220462, ounce: 0.035274, ton: 0.000001 }
    },
    temperature: {
      celsius: { fahrenheit: (c) => (c * 9/5) + 32, kelvin: (c) => c + 273.15 },
      fahrenheit: { celsius: (f) => (f - 32) * 5/9, kelvin: (f) => ((f - 32) * 5/9) + 273.15 },
      kelvin: { celsius: (k) => k - 273.15, fahrenheit: (k) => ((k - 273.15) * 9/5) + 32 }
    }
  };

  const units = {
    length: ['meter', 'feet', 'inch', 'yard', 'kilometer', 'centimeter'],
    weight: ['kilogram', 'pound', 'ounce', 'gram', 'ton'],
    temperature: ['celsius', 'fahrenheit', 'kelvin']
  };

  const convertUnit = () => {
    const input = parseFloat(inputValue);
    if (!input) return;

    if (category === 'temperature') {
      const conversionFunc = conversions[category][fromUnit][toUnit];
      if (conversionFunc) {
        setResult(conversionFunc(input).toFixed(4));
      }
    } else {
      if (fromUnit === toUnit) {
        setResult(input.toString());
      } else {
        const conversionFactor = conversions[category][fromUnit][toUnit];
        if (conversionFactor) {
          setResult((input * conversionFactor).toFixed(4));
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">📏 Unit Converter</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setFromUnit(units[e.target.value][0]);
                  setToUnit(units[e.target.value][1]);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="length">Length</option>
                <option value="weight">Weight</option>
                <option value="temperature">Temperature</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Value</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter value to convert"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">From</label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {units[category].map(unit => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">To</label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {units[category].map(unit => (
                    <option key={unit} value={unit}>
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={convertUnit}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Convert
            </button>

            {result && (
              <div className="mt-4 p-4 bg-gray-100 rounded text-center">
                <div className="text-lg">
                  <span className="font-bold">{inputValue} {fromUnit}</span>
                  <span className="mx-2">=</span>
                  <span className="font-bold text-green-600">{result} {toUnit}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/calculators" className="text-white underline hover:text-blue-200">
            Back to Calculators
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
