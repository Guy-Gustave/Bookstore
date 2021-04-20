import React from 'react';

const BookDetails = ({book, remove}) => {

  const handleRemove = () => {
    remove(book);
  };

  return (
    <div className="book-details-div container-fluid bg-primary" style={{width: "200%"}}>
      <h4>{book.category}</h4>
      <h2>{book.title}</h2>
      <div className="book-details-buttons-div">
        <span>Comment</span>
        <span>
          <button type="button" onClick={handleRemove}>Remove Book</button>
        </span>
        <span>Edit</span>
      </div>
    </div>
  );
}

export default BookDetails;