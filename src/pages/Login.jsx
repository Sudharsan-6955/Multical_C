import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Use production URL first, fallback to localhost for development
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://multical-c-backend.onrender.com';
      
      console.log('Attempting login to:', `${backendUrl}/api/auth/login`);
      
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login response:', data);
      
      if (data.success) {
        // Store token if needed
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/calculators'), 2000);
      } else {
        setMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      
      // More specific error messages
      if (error.message.includes('Failed to fetch')) {
        setMessage('Cannot connect to server. Please check your internet connection.');
      } else if (error.message.includes('404')) {
        setMessage('Server endpoint not found. Please contact support.');
      } else if (error.message.includes('500')) {
        setMessage('Server error. Please try again later.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
        
        {/* Backend URL indicator for debugging */}
        <div className="mb-4 p-2 bg-gray-100 rounded text-xs text-gray-600">
          Backend: {import.meta.env.VITE_BACKEND_URL || 'https://multical-c-backend.onrender.com'}
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button
            onClick={handleSignupRedirect}
            className="text-blue-500 hover:text-blue-700 text-sm underline"
          >
            Don't have an account? Sign up
          </button>
        </div>
        
        {message && (
          <p className={`mt-4 text-center text-sm ${
            message.includes('successful') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;