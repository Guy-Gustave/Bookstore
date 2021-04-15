import { createStore } from 'redux';
import books from './reducers/book';

const store = createStore(books);

export default store;
