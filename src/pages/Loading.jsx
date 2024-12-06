// src/pages/Loading.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex gap-2">
        <span className="loading loading-spinner text-primary "></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    </div>
  );
};

export default Loading;
