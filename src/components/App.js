import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <BooksList />
    <BooksForm />
    <p>Project by Guy and Roy</p>
  </div>
);

export default App;
