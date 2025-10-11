import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);

  // Mock exchange rates (in real app, fetch from API)
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110, CAD: 1.25, AUD: 1.35, INR: 83.12 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129, CAD: 1.47, AUD: 1.59, INR: 97.88 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150, CAD: 1.71, AUD: 1.85, INR: 113.87 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, CAD: 0.011, AUD: 0.012, INR: 0.76 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.58, JPY: 88, AUD: 1.08, INR: 66.50 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.54, JPY: 81, CAD: 0.93, INR: 61.54 },
    INR: { USD: 0.012, EUR: 0.010, GBP: 0.0088, JPY: 1.32, CAD: 0.015, AUD: 0.016 }
  };

  const currencyData = [
    { code: 'USD', country: 'United States' },
    { code: 'EUR', country: 'European Union' },
    { code: 'GBP', country: 'United Kingdom' },
    { code: 'JPY', country: 'Japan' },
    { code: 'CAD', country: 'Canada' },
    { code: 'AUD', country: 'Australia' },
    { code: 'INR', country: 'India' }
  ];

  const convertCurrency = () => {
    const amountNum = parseFloat(amount);
    if (amountNum && fromCurrency && toCurrency) {
      if (fromCurrency === toCurrency) {
        setResult(amountNum);
      } else {
        const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
        setResult(amountNum * rate);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-4 sm:p-6 lg:p-8">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white ml-4 flex-1">💱 Currency Converter</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter amount"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {currencyData.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {currencyData.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={convertCurrency}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Convert
            </button>

            {result > 0 && (
              <div className="mt-4 p-4 bg-gray-100 rounded text-center">
                <div className="text-2xl font-bold text-green-600">
                  {result.toFixed(2)} {toCurrency}
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

export default CurrencyConverter;
