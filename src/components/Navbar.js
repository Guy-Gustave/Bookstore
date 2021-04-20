import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';
import './NavbarStyles.css';

const Navbar = ({ filterCategoryName }) => {
  const handleFilterChange = (categoryName) => {
    filterCategoryName(categoryName);
  };
  return (
    <header className="bg-white container-fluid p-3">
      <nav className="container d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <h3 className="text-primary font-weight-bold">Bookstore CMS</h3>
          <span className="text-secondary mx-5 books-span">BOOKS</span>
          <CategoryFilter filter={handleFilterChange} />
        </div>
        <span className="text-primary d-flex justify-content-center align-items-center p-3"><i className="fas fa-user-alt"></i></span>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  filterCategoryName: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCategoryName: (categoryName) => {
      dispatch(changeFilter(categoryName));
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
