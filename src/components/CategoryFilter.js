import React from 'react';

const CategoryFilter = () => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return(
    <select name="categorySelect">
      {categories.map(cat => <option value={cat} >{cat} </option>)}
    </select>
  )
}

export default CategoryFilter