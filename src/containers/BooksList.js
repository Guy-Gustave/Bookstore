import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { listBooks, catName } = props;

  const handleRemoveBook = (book) => {
    props.removeNewBook(book);
  };

  const handleFilterChange = (categoryName) => {
    props.filterCategory(categoryName);
  }

  const filterBooksList = (array, filterCategory) => {
    let secondList = [...array];
    if(filterCategory === 'All'){
      return secondList;  
    }
    return secondList.filter(el => (el.category === filterCategory));
  }

  return (
    <>
      <CategoryFilter filter={handleFilterChange}/>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {filterBooksList(listBooks, catName).map((el) => <Book book={el} key={el} remove={handleRemoveBook} />)}
      </table>
    </>
  );
};

BooksList.propTypes = {
  listBooks: PropTypes.objectOf(PropTypes.object).isRequired,
  removeNewBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  listBooks: state.booksList,
  catName: state.categoryName
});

const mapDispatchToProps = (dispatch) => (
  {
    removeNewBook: (bookObj) => {
      dispatch(removeBook(bookObj));
    },

    filterCategory: (cat) => {
      dispatch(changeFilter(cat));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
