import React from 'react';

const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];


  const handleFilter = (e) => {
    props.filter(e.target.value);
  }

  return(
    <select name="categorySelect" onChange={handleFilter}>
      {categories.map(cat => <option value={cat} >{cat} </option>)}
    </select>
  )
}

export default CategoryFilter