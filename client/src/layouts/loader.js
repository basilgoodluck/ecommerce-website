import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid red',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      ></div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
