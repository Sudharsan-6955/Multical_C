import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('15');
  const [numberOfPeople, setNumberOfPeople] = useState('1');

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(tipPercentage) || 0;
    const people = parseInt(numberOfPeople) || 1;

    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;
    const tipPerPerson = tipAmount / people;

    return {
      tipAmount: tipAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      perPerson: perPerson.toFixed(2),
      tipPerPerson: tipPerPerson.toFixed(2)
    };
  };

  const results = calculateTip();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-500 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">💰 Tip Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Bill Amount ($)</label>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter bill amount"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tip Percentage ({tipPercentage}%)
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Number of People</label>
              <input
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="quick-tip-buttons grid grid-cols-4 gap-2 mt-4">
              {[10, 15, 18, 20].map(percent => (
                <button
                  key={percent}
                  onClick={() => setTipPercentage(percent.toString())}
                  className={`py-2 rounded text-sm font-semibold ${
                    tipPercentage === percent.toString()
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
          </div>

          {billAmount && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-3">Bill Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tip Amount:</span>
                  <span className="font-bold">${results.tipAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-bold">${results.totalAmount}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                  <span>Per Person:</span>
                  <span className="font-bold text-green-600">${results.perPerson}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tip Per Person:</span>
                  <span className="font-bold">${results.tipPerPerson}</span>
                </div>
              </div>
            </div>
          )}
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

export default TipCalculator;
