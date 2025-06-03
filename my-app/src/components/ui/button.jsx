// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      {children}
    </button>
  );
};
