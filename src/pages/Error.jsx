import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'; // Correct import
import { Tooltip } from 'react-tooltip'; // Import Tooltip

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center space-y-8">
      {/* Non-clickable Tooltip */}
      <div>
        <a id="not-clickable" className="text-2xl font-bold text-gray-700">
          ◕‿‿◕
        </a>
        <Tooltip anchorSelect="#not-clickable">
          <span className="text-sm text-gray-600">You can't click me :(</span>
        </Tooltip>
      </div>

      {/* Clickable Tooltip */}
      <div>
        <a
          id="clickable"
          className="text-2xl font-bold text-teal-500 hover:underline"
        >
          ◕‿‿◕
        </a>
        <Tooltip anchorSelect="#clickable" clickable>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md shadow hover:bg-teal-600">
            You can click me!
          </button>
        </Tooltip>
      </div>

      {/* Error Message */}
      <div>
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-600">
          We couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-4 text-teal-500 hover:underline inline-block"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
