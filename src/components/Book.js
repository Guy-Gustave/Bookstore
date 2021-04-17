import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, remove }) => {
  const handleRemove = () => {
    remove(book);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleRemove}>Remove Book</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
