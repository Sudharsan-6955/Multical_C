import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (principal && monthlyRate && numberOfPayments) {
      const monthlyPaymentAmount = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPaymentAmount = monthlyPaymentAmount * numberOfPayments;
      const totalInterestAmount = totalPaymentAmount - principal;

      setMonthlyPayment(monthlyPaymentAmount);
      setTotalPayment(totalPaymentAmount);
      setTotalInterest(totalInterestAmount);
    }
  };

  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      calculateLoan();
    }
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 p-4 sm:p-6 lg:p-8">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-white ml-4 flex-1">🏠 Loan Calculator</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Loan Amount ($)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter loan amount"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter interest rate"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter loan term"
              />
            </div>
          </div>

          {monthlyPayment > 0 && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-3">Loan Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly Payment:</span>
                  <span className="font-bold">${monthlyPayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Payment:</span>
                  <span className="font-bold">${totalPayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Interest:</span>
                  <span className="font-bold text-red-600">${totalInterest.toFixed(2)}</span>
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

export default LoanCalculator;
