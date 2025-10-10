import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);

  // Mock exchange rates (in real app, fetch from API)
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110, CAD: 1.25, AUD: 1.35 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129, CAD: 1.47, AUD: 1.59 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150, CAD: 1.71, AUD: 1.85 }
  };

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'];

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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">💱 Currency Converter</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
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
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
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
                  {currencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
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
