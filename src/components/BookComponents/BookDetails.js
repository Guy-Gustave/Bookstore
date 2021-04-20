import React from 'react';
import PropTypes from 'prop-types';
import '../NavbarStyles.css';

const BookDetails = ({ book, remove }) => {
  const handleRemove = () => {
    remove(book);
  };

  const authors = ['Roy NTAATE', 'Guy Gustave NIGABA', 'Ntaate from UGANDA', 'Ngugi wa Nthiongo', 'Adrien Ntabona'];

  return (
    <div className="book-details-div container-fluid bg-light my-3" style={{ width: '200%' }}>
      <h6 className="text-secondary">{book.category}</h6>
      <h4 className="title">{book.title}</h4>
      <span className="spin-det mb-3 text-primary font-weight-light">{authors[Math.floor(Math.random() * 5)]}</span>
      <div className=" book-details-buttons-div d-flex">
        <span className="pr-4 spin-det">Comment</span>
        <span className="pr-4 spin-det ">
          <button type="button" onClick={handleRemove}>Remove Book</button>
        </span>
        <span className="pr-4 spin-det">Edit</span>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default BookDetails;
