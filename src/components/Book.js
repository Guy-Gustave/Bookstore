import React from 'react';
import PropTypes from 'prop-types';

let Book = (book) => {
  const { title, category } = book;
  return (
    <>
      {/* <h2>Title: {title}</h2>
      <p>Category: {category}</p> */}
      <tr>
        <td>
          {title}
        </td>
        <td>
          {category}
        </td>
      </tr>
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