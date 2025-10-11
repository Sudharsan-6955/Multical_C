import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
      <header className="flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold">MULTI CAL_C</h1>
      </header>
      <main className="mt-20">
        <h2 className="text-4xl font-bold">Welcome to Multi Calc</h2>
        <p className="mt-4 text-lg">Your one-stop solution for all calculator needs.</p>
        <div className="justify-center flex space-x-4 mt-8">
          <Link to="/login" className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;

