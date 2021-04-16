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

const changeFilter = (category) => (
  {
    type: 'CHANGE_FILTER',
    categoryName: category
  }
)

export { addBook, removeBook, changeFilter };
