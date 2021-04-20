import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookComponents/BookDetails';
import BookProgress from './BookComponents/BookProgress';
import BookChapter from './BookComponents/BookChapter';

const Book = ({ book, remove }) => {
  const handleRemove = () => {
    remove(book);
  };
  return (
    <div className="book-component-div container-fluid d-flex justify-content-between align-items-center mb-3 p-0">
      <BookDetails book={book} remove={remove}/>
      <BookProgress />
      <BookChapter />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
