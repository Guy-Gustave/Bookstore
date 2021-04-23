import React from 'react';
import PropTypes from 'prop-types';
import './NavbarStyles.css';

const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilter = (e) => {
    props.filter(e.target.value);
  };

  return (
    <select name="categorySelect" onChange={handleFilter} className="navbar-select bg-white text-secondary p-1">
      {categories.map((cat) => (
        <option value={cat} key={cat}>
          {cat}
          {' '}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.defaultProps = {
  filter: () => {},
};

CategoryFilter.propTypes = {
  filter: PropTypes.func,
};

export default CategoryFilter;
