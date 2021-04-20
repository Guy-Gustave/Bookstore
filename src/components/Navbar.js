import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';
import { connect } from 'react-redux';

const Navbar = ({ filterCategoryName }) => {

  const handleFilterChange = (categoryName) => {
    filterCategoryName(categoryName);
  }
  return (
  <header className="bg-white ml-4 w-100 p-3">
    <nav className="container d-flex justify-content-arround align-items-center w-100">
      <div className="d-flex align-items-center">
        <h3 className="text-primary font-weight-bold">Bookstore CMS</h3>
        <span className="text-secondary mx-5">Books</span>
        <CategoryFilter filter={handleFilterChange} />
      </div>
    </nav>
  </header>);
};

Navbar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    filterCategoryName: (categoryName) => {
      dispatch(changeFilter(categoryName));
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
