import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [backendStatus, setBackendStatus] = useState('checking');

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://multical-c-backend.onrender.com';
        const response = await fetch(`${backendUrl}/api/health`);
        
        if (response.ok) {
          const data = await response.json();
          setBackendStatus(data.database?.status === 'Connected' ? 'online' : 'partial');
        } else {
          setBackendStatus('offline');
        }
      } catch (error) {
        console.error('Backend health check failed:', error);
        setBackendStatus('offline');
      }
    };

    checkBackendHealth();
    // Check every 30 seconds
    const interval = setInterval(checkBackendHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Backend Status Indicator */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <div className={`w-3 h-3 rounded-full ${
              backendStatus === 'online' ? 'bg-green-400' : 
              backendStatus === 'partial' ? 'bg-yellow-400' : 
              backendStatus === 'offline' ? 'bg-red-400' : 
              'bg-gray-400 animate-pulse'
            }`}></div>
            <span className="text-white text-sm">
              {backendStatus === 'online' ? 'System Online' : 
               backendStatus === 'partial' ? 'Database Issue' :
               backendStatus === 'offline' ? 'System Offline' : 
               'Checking Status...'}
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Welcome to MultiCalc
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
          Your all-in-one calculator suite with 8 specialized calculators for every need.
          From basic arithmetic to advanced financial calculations.
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-8">
          <Link
            to="/signup"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started
          </Link>
          
          <Link
            to="/login"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Login
          </Link>
          
          <Link
            to="/calculators"
            className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors shadow-lg"
          >
            Try Calculators
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: '🧮', title: 'Basic Calculator', desc: 'Standard arithmetic' },
            { icon: '🔬', title: 'Scientific', desc: 'Advanced functions' },
            { icon: '🏠', title: 'Loan Calculator', desc: 'Financial planning' },
            { icon: '⚖️', title: 'BMI Calculator', desc: 'Health tracking' },
            { icon: '💱', title: 'Currency', desc: 'Exchange rates' },
            { icon: '🎓', title: 'CGPA', desc: 'Academic grades' },
            { icon: '📅', title: 'Age Calculator', desc: 'Date calculations' },
            { icon: '📏', title: 'Unit Converter', desc: 'Measurement tools' }
          ].map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Backend Info for Development */}
        <div className="mt-8 text-xs text-white/60">
          Backend: {import.meta.env.VITE_BACKEND_URL || 'https://multical-c-backend.onrender.com'}
        </div>
      </div>
    </div>
  );
};

export default Home;

