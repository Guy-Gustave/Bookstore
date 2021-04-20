import React from 'react';

const BookChapter = () => {
  return(
    <div className="book-chapter-div container-fluid bg-light P-3">
      <h6 className='mt-4 text-secondary'>CURRENT CHAPTER</h6>
      <p>Chapter 17</p>
      <button className='btn-primary rounded px-3 mb-3' style={{fontSize: "12px"}}>UPDATE PRGRESS</button>

    </div>
  );
}

export default BookChapter;