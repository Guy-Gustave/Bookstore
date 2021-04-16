import { combineReducers } from 'redux';
import books from './book';
import filter from './filter';

const allReducers = combineReducers({
  booksList: books,
  categoryName: filter
});

export default allReducers;
