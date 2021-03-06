import React from 'react';

const BookProgress = () => (
  <div className="progress d-flex container-fluid my-3 bg-white">
    <div className="spinner-div" />
    <div className="book-progress-div px-3 mb-3">
      <h2 className="mt-4">
        {Math.floor(Math.random() * 100)}
        %
      </h2>
      <p className="h6 text-secondary" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px' }}>Completed</p>
    </div>
  </div>
);

export default BookProgress;
