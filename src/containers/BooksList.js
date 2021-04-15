import React from 'react';
import {connect} from 'react-redux';

let BooksList = (props) => {
  let booksArray = [...props.listBooks];
  return(
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {booksArray.map(book => <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>)}
    </table>
  )
}

let mapStateToProps = (state) => {
  return ({
    listBooks : state
  });
}

export default connect(mapStateToProps, null)(BooksList);