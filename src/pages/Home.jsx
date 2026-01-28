import React from 'react';
import { useNavigate } from 'react-router-dom';

const PICSUM_URL = 'https://picsum.photos/1600/900?blur=2';

const Home = () => {
  return (
    <div
      className="h-screen text-white text-center relative"
      style={{
        backgroundImage: `url(${PICSUM_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10">
        <header className="flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold">MULTI CAL_C</h1>
        </header>
        <main className="mt-20">
          <h2 className="text-4xl font-bold transition-opacity duration-700">Welcome to Multi Calc</h2>
          <p className="mt-4 text-lg">Your one-step solution for all calculator needs.</p>
          <p className="mt-4 text-lg">Register me</p>

          <div className="justify-center flex mt-8">
            {/* Single Get Started button that routes based on localStorage flag */}
            <GetStartedButton />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const registered = localStorage.getItem('userRegistered');
    if (registered === 'true') {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg transition transform duration-200 hover:-translate-y-1 hover:scale-105"
      style={{ minWidth: 160 }}
    >
      Get Started
    </button>
  );
};

