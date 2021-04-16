import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, remove } = props;

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

Book.defaultProps = {
  book: {},
  remove: () => {},
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object),
  remove: PropTypes.func,
};

export default Book;
