import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';

const BooksList = (props) => {
  const { listBooks, catName } = props;

  const handleRemoveBook = (book) => {
    props.removeNewBook(book);
  };

  const filterBooksList = (array, filterCategory) => {
    const secondList = [...array];
    if (filterCategory === 'All') {
      return secondList;
    }
    return secondList.filter((el) => (el.category === filterCategory));
  };

  return (
    <div className="w-100 d-flex">
      <table className="">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {filterBooksList(listBooks, catName).map(
          (el) => <Book book={el} key={el} remove={handleRemoveBook} />,
        )}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  listBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  removeNewBook: PropTypes.func.isRequired,
  catName: PropTypes.string.isRequired,
  filterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listBooks: state.booksList,
  catName: state.categoryName,
});

const mapDispatchToProps = (dispatch) => (
  {
    removeNewBook: (bookObj) => {
      dispatch(removeBook(bookObj));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
