import {createStore} from 'redux'
import books from './reducers/book';

let store = createStore(books);

export default store;