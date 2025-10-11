import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [bmi, setBMI] = useState(0);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    let weightKg = parseFloat(weight);
    let heightM = parseFloat(height);

    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592; // pounds to kg
      heightM = heightM * 0.0254; // inches to meters
    } else {
      heightM = heightM / 100; // cm to meters
    }

    if (weightKg && heightM) {
      const bmiValue = weightKg / (heightM * heightM);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  useEffect(() => {
    if (weight && height) {
      calculateBMI();
    }
  }, [weight, height, unit]);

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-600';
      case 'Normal weight':
        return 'text-green-600';
      case 'Overweight':
        return 'text-yellow-600';
      case 'Obese':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-sm sm:max-w-md mx-auto">
        <div className="flex items-center mb-6 sm:mb-8">
          <Link 
            to="/calculators" 
            className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-white ml-4 flex-1">⚖️ BMI Calculator</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Unit System</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="metric">Metric (kg, cm)</option>
              <option value="imperial">Imperial (lbs, inches)</option>
            </select>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight ({unit === 'metric' ? 'kg' : 'lbs'})
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder={`Enter weight in ${unit === 'metric' ? 'kg' : 'lbs'}`}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Height ({unit === 'metric' ? 'cm' : 'inches'})
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder={`Enter height in ${unit === 'metric' ? 'cm' : 'inches'}`}
              />
            </div>
          </div>

          {bmi > 0 && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-3">Your BMI Result</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {bmi.toFixed(1)}
                </div>
                <div className={`text-lg font-semibold ${getCategoryColor()}`}>
                  {category}
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <h4 className="font-semibold mb-2">BMI Categories:</h4>
                <div className="space-y-1">
                  <div>Underweight: Below 18.5</div>
                  <div>Normal weight: 18.5-24.9</div>
                  <div>Overweight: 25-29.9</div>
                  <div>Obese: 30 or greater</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
