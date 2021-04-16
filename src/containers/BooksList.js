import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = (props) => {
  const { listBooks } = props;


  let handleRemoveBook = (book) => {
    props.removeNewBook(book)
  };


  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {listBooks.map((el) => <Book book={el} key={el} remove={handleRemoveBook}/>)}
    </table>
  );
};

BooksList.propTypes = {
  listBooks: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  listBooks: state.booksList,
});

const mapDispatchToProps = dispatch => {
  return(
    {
      removeNewBook: (bookObj) => {
        dispatch(removeBook(bookObj));
      }
    }
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
