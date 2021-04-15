import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
    <p>Project by Guy and Roy</p>
  </div>
);

export default App;
