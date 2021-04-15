let myId = () => {
  return Math.floor(Math.random() * 100)
};


let initialState = [
  {
    id: myId(),
    title: 'East Africa Book for Geniuses.',
    category: 'Learning',
  },
  {
    id: myId(),
    title: 'The history of React js',
    category: 'Biography'
  },

  {
    id: myId(),
    title: 'Guy lives in Burundi',
    category: 'History'
  }
]

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book ];
    case 'REMOVE_BOOK':
      return [ ...state.filter(book => action.id !== book.id)];
    default:
      return state;
  }
};

export default books;