import React from 'react';

const BookProgress = () => (
  <div className="progress d-flex container-fluid bg-light my-3">
    <div className="spinner-div" />
    <div className="book-progress-div px-3 mb-3">
      <h2 className="mt-4">
        {Math.floor(Math.random() * 100)}
        %
      </h2>
      <p className="h6 text-secondary">Completed</p>
    </div>
  </div>
);

export default BookProgress;
