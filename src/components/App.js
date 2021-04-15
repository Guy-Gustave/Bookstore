import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';


let  App = () => {
  return (
    <div className="App">
        <BooksList />
        <BooksForm />
        <p>Don't forget, it is still "Guy & Roy"</p>
    </div>
  );
}

export default App;
