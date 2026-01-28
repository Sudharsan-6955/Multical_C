import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CalculatorList from './pages/CalculatorList';
import BasicCalculator from './calcs/BasicCalculator';
import ScientificCalculator from './calcs/ScientificCalculator';
import LoanCalculator from './calcs/LoanCalculator';
import BMICalculator from './calcs/BMICalculator';
import CurrencyConverter from './calcs/CurrencyConverter';
import CGPACalculator from './calcs/CGPACalculator';
import AgeCalculator from './calcs/AgeCalculator';
import UnitConverter from './calcs/UnitConverter';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  // Prevent inspect element and console manipulation (basic protection)
  React.useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    
    // Detect DevTools opening
    const detectDevTools = () => {
      const threshold = 160;
      if (window.outerWidth - window.innerWidth > threshold || 
          window.outerHeight - window.innerHeight > threshold) {
        // DevTools is open - you could redirect or show warning
        console.clear();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('resize', detectDevTools);
    
    // Periodic checks
    const interval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', detectDevTools);
      clearInterval(interval);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculators" element={
            <ProtectedRoute>
              <CalculatorList />
            </ProtectedRoute>
          } />
          <Route path="/basic-calculator" element={
            <ProtectedRoute>
              <BasicCalculator />
            </ProtectedRoute>
          } />
          <Route path="/scientific-calculator" element={
            <ProtectedRoute>
              <ScientificCalculator />
            </ProtectedRoute>
          } />
          <Route path="/loan-calculator" element={
            <ProtectedRoute>
              <LoanCalculator />
            </ProtectedRoute>
          } />
          <Route path="/bmi-calculator" element={
            <ProtectedRoute>
              <BMICalculator />
            </ProtectedRoute>
          } />
          <Route path="/currency-converter" element={
            <ProtectedRoute>
              <CurrencyConverter />
            </ProtectedRoute>
          } />
          <Route path="/cgpa-calculator" element={
            <ProtectedRoute>
              <CGPACalculator />
            </ProtectedRoute>
          } />
          <Route path="/age-calculator" element={
            <ProtectedRoute>
              <AgeCalculator />
            </ProtectedRoute>
          } />
          <Route path="/unit-converter" element={
            <ProtectedRoute>
              <UnitConverter />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
