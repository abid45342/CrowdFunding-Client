// src/pages/Error.js
import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600">We couldn't find the page you're looking for.</p>
        <a href="/" className="mt-4 text-teal-500 hover:underline">Go back to Home</a>
      </div>
    </div>
  );
};

export default Error;
