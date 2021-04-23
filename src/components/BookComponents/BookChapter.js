import React from 'react';

const BookChapter = () => (
  <div className="book-chapter-div container-fluid bg-white P-3">
    <h6 className="mt-4 text-secondary chapter-details">CURRENT CHAPTER</h6>
    <p className="chapter-details">Chapter 17</p>
    <button type="button" className="btn-primary rounded px-3 py-2 mb-3" style={{ fontSize: '12px', border: 'none', fontFamily: "Roboto Slab', serif" }}>UPDATE PROGRESS</button>

  </div>
);

export default BookChapter;
