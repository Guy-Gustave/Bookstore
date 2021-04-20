import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';
import '../components/NavbarStyles.css';

const BooksForm = (props) => {
  const [localbook, setLocalBook] = useState(
    {
      id: Math.floor(Math.random() * 100),
      title: '',
      category: 'Action',
    },
  );

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'input':
        setLocalBook({ id: localbook.id, title: e.target.value, category: localbook.category });
        break;

      case 'select':
        setLocalBook({ id: localbook.id, title: localbook.title, category: e.target.value });
        break;

      default:
    }
  };

  const handleSubmit = (e) => {
    props.submitNewBook(localbook);
    setLocalBook(
      {
        id: Math.floor(Math.random() * 100),
        title: '',
        category: 'Action',
      },
    );
    e.preventDefault();
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="add-book mt-4">
      <h4 className="h2 text-secondary font-weight-bold m-3">ADD NEW BOOK</h4>
      <form className="form d-flex justify-content-between" onSubmit={handleSubmit}>
        <input type="text" className="w-150 mx-3 pl-4" style={{ width: '350px' }} placeholder="Type book title here" name="input" onChange={handleChange} value={localbook.title} />
        <select className=" mx-3" style={{ width: '150px' }} name="select" onChange={handleChange} value={localbook.category}>
          {categories.map((el) => <option key={el} value={el}>{el}</option>)}
        </select>
        <button className="but btn-primary btn-lg px-5 " type="submit">Submit</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  submitNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    submitNewBook: (localbook) => {
      dispatch(addBook(localbook));
    },
  }
);

export default connect(null, mapDispatchToProps)(BooksForm);
