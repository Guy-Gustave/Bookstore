const addBook = (bookObj) => (
  {
    type: 'CREATE_BOOK',
    book: { ...bookObj },
  }
);

const removeBook = (bookObj) => (
  {
    type: 'REMOVE_BOOK',
    id: bookObj.id,
  }
);

export { addBook, removeBook };
