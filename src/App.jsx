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
import TipCalculator from './calcs/TipCalculator';
import AgeCalculator from './calcs/AgeCalculator';
import UnitConverter from './calcs/UnitConverter';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculators" element={<CalculatorList />} />
          <Route path="/basic-calculator" element={<BasicCalculator />} />
          <Route path="/scientific-calculator" element={<ScientificCalculator />} />
          <Route path="/loan-calculator" element={<LoanCalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/unit-converter" element={<UnitConverter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
