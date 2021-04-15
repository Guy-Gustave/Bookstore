const addBook = (bookObj) => (
  {
    type: 'CREATE_BOOK',
    book: { ...bookObj },
  }
);

const removeBook = (id) => (
  {
    type: 'REMOVE_BOOK',
    id,
  }
);

export { addBook, removeBook };
