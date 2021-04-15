import { combineReducers } from 'redux';
import books from './book';

const allReducers = combineReducers({
  booksList: books,
});

export default allReducers;
