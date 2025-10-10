import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);

  const calculateAge = () => {
    if (!birthDate) return null;

    const birth = new Date(birthDate);
    const target = new Date(targetDate);
    
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((target - birth) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    const totalWeeks = Math.floor(totalDays / 7);

    return {
      years,
      months,
      days,
      totalDays,
      totalMonths,
      totalWeeks
    };
  };

  const age = calculateAge();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">📅 Age Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Birth Date</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Calculate Age As Of</label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {age && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-3">Age Details</h3>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">
                  {age.years} Years {age.months} Months {age.days} Days
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Years:</span>
                  <span className="font-bold">{age.years}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Months:</span>
                  <span className="font-bold">{age.totalMonths}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Weeks:</span>
                  <span className="font-bold">{age.totalWeeks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Days:</span>
                  <span className="font-bold">{age.totalDays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Hours:</span>
                  <span className="font-bold">{(age.totalDays * 24).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Minutes:</span>
                  <span className="font-bold">{(age.totalDays * 24 * 60).toLocaleString()}</span>
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

export default AgeCalculator;
