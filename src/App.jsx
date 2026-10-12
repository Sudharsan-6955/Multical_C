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
import TipCalculator from './calcs/TipCalculator';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
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
          <Route path="/tip-calculator" element={
            <ProtectedRoute>
              <TipCalculator />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
