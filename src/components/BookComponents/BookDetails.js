import React from 'react';
import PropTypes from 'prop-types';
import '../NavbarStyles.css';

const BookDetails = ({ book, remove }) => {
  const handleRemove = () => {
    remove(book);
  };

  const authors = ['Roy NTAATE', 'Guy Gustave NIGABA', 'Ntaate from UGANDA', 'Ngugi wa Nthiongo', 'Adrien Ntabona'];

  return (
    <div className="book-details-div container-fluid bg-light my-3 p-0 pl-4 bg-white" style={{ width: '200%' }}>
      <h6 className="text-secondary book-category-h6">{book.category}</h6>
      <h4 className="title mb-0">{book.title}</h4>
      <span className="spin-det  text-primary font-weight-light">{authors[Math.floor(Math.random() * 5)]}</span>
      <div className=" book-details-buttons-div d-flex mt-3">
        <span className="pr-3 spin-det">Comment</span>
        <span className="pr-3 pl-3 spin-det button-span">
          <button type="button" onClick={handleRemove}>Remove Book</button>
        </span>
        <span className="pl-3 spin-det">Edit</span>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default BookDetails;
