import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="d-flex flex-column justify-content-center align-items-center main-div">
      <BooksList />
      <BooksForm />
      <p className='mt-5 text-secondary font-italic'>Project by Guy and Roy</p>
    </div>
  </div>
);
  
export default App;
