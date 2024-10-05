// Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
      <div className="spinner"></div>
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #000; /* Change to your background color */
          color: #fff; /* Change to your text color */
        }
        .spinner {
          margin-top: 20px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid #fff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;