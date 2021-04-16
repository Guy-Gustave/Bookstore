import React from 'react';
import {useState} from 'react';
import { connect } from 'react-redux';
import { addBook } from  '../actions/index';

const BooksForm = (props) => {

  const [localbook, setLocalBook] = useState(
    {
      id: Math.floor(Math.random() * 100),
      title: "Gustave and Roy book",
      category: 'Action'
    }
  );

  let handleChange = e => {
    switch(e.target.name){
      case 'input':
        setLocalBook({id: localbook.id, title: e.target.value, category: localbook.category});
        break;
      
      case 'select':
        setLocalBook({id:localbook.id, title: localbook.title, category: e.target.value});
        break;
      
      default:
    }
  }

  let handleSubmit = () => {
    props.submitNewBook(localbook);
    setLocalBook(
      {
        id: Math.floor(Math.random() * 100),
        title: '',
        category: 'Action'        
      })
  }

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="Type book title here" name='input' onChange={handleChange} value={localbook.title}/>
      <select name='select' onChange={handleChange} value={localbook.category} >
        {categories.map((el) => <option key={el} value={el} >{el}</option>)}
      </select>
      <button type="button" onClick={handleSubmit} >Submit</button>
    </form>
  );
};

let mapDispatchToProps = dispatch => {
  return (
    {
      submitNewBook: (localbook) => {
        dispatch(addBook(localbook));        
      }
    }
  );
}

export default connect(null, mapDispatchToProps)(BooksForm) ;
