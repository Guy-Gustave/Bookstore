import React from 'react';
import PropTypes from 'prop-types';

let Book = () => {
  const {title, category} = props;
  return(
    <>
      <h2>Title: {title}</h2>
      <p>Category: {category}</p>
    </>
  )
}

Book.defaultProps = {
  title: '',
  category: ''
}

Book.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string
}

export default Book;