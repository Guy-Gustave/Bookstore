export default addBook = (bookObj) => {
  return(
    {
      type: 'CREATE_BOOK',
      book: {...bookObj}
    }
  )
}

export default removeBook = id => {
  return(
    {
      type: 'REMOVE_BOOK',
      id
    }
  );
}