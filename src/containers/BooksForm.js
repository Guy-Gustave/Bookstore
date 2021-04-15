import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="Type book title here" />
      <select>
        {categories.map((el) => <option key={el}>{el}</option>)}
      </select>
      <button type="button">Submit</button>
    </form>
  );
};

export default BooksForm;
