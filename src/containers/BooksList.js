import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BooksList = (props) => {
  const { listBooks } = props;
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {listBooks.map((book) => (
        <tr key={book}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
      ))}
    </table>
  );
};

BooksList.propTypes = {
  listBooks: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  listBooks: state,
});

export default connect(mapStateToProps, null)(BooksList);
