import React from 'react';
import {useState} from 'react';

const BooksForm = () => {

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

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="Type book title here" name='input' onChange={handleChange} />
      <select name='select' onChange={handleChange} >
        {categories.map((el) => <option key={el} value={el} >{el}</option>)}
      </select>
      <button type="button">Submit</button>
    </form>
  );
};

export default BooksForm;
