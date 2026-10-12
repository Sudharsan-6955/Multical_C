import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CalculatorList = () => {
  const [backendStatus, setBackendStatus] = useState('checking');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    // Check backend health
    const checkBackend = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://multical-c-backend.onrender.com';
        const response = await fetch(`${backendUrl}/`);
        if (response.ok) {
          setBackendStatus('online');
        } else {
          setBackendStatus('offline');
        }
      } catch (error) {
        console.error('Backend check failed:', error);
        setBackendStatus('offline');
      }
    };

    checkBackend();
  }, []);

  const calculators = [
    {
      id: 1,
      title: 'Basic Calculator',
      description: 'Standard arithmetic operations',
      icon: '🧮',
      path: '/basic-calculator'
    },
    {
      id: 2,
      title: 'Scientific Calculator',
      description: 'Advanced mathematical functions',
      icon: '🔬',
      path: '/scientific-calculator'
    },
    {
      id: 3,
      title: 'Loan Calculator',
      description: 'Calculate loan payments and interest',
      icon: '🏠',
      path: '/loan-calculator'
    },
    {
      id: 4,
      title: 'BMI Calculator',
      description: 'Body Mass Index calculator',
      icon: '⚖️',
      path: '/bmi-calculator'
    },
    {
      id: 5,
      title: 'Currency Converter',
      description: 'Convert between different currencies',
      icon: '💱',
      path: '/currency-converter'
    },
    {
      id: 6,
      title: 'CGPA Calculator',
      description: 'Calculate Cumulative Grade Point Average',
      icon: '🎓',
      path: '/cgpa-calculator'
    },
    {
      id: 7,
      title: 'Age Calculator',
      description: 'Calculate age and date differences',
      icon: '📅',
      path: '/age-calculator'
    },
    {
      id: 8,
      title: 'Unit Converter',
      description: 'Convert between different units',
      icon: '📏',
      path: '/unit-converter'
    },
    {
      id: 9,
      title: 'Tip Calculator',
      description: 'Calculate tips and split bills effortlessly',
      icon: '💰',
      path: '/tip-calculator'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8 px-4 flex-wrap gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Calculators</h1>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Backend Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-white text-sm bg-black/20 px-3 py-1 rounded-full">
              <div className={`w-2 h-2 rounded-full ${
                backendStatus === 'online' ? 'bg-green-400' : 
                backendStatus === 'offline' ? 'bg-red-400' : 
                'bg-yellow-400 animate-pulse'
              }`}></div>
              <span className="text-xs">
                {backendStatus === 'online' ? 'Backend Online' : 
                 backendStatus === 'offline' ? 'Backend Offline' : 
                 'Checking...'}
              </span>
            </div>
            
            <Link to="/" className="text-white hover:text-blue-200 text-sm sm:text-base py-1.5 px-3 rounded transition-colors flex items-center gap-1.5 bg-white/10 hover:bg-white/20">
              <span>←</span>
              <span>Home</span>
            </Link>

            <button
              onClick={handleLogout}
              className="text-white hover:text-red-200 text-sm sm:text-base py-1.5 px-3 rounded transition-colors bg-red-500/80 hover:bg-red-600 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0">
          {calculators.map((calc) => (
            <Link
              key={calc.id}
              to={calc.path}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{calc.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 leading-tight">{calc.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{calc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorList;