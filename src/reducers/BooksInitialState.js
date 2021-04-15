const myId = () => Math.floor(Math.random() * 100);

const initialState = [
  {
    id: myId(),
    title: 'East Africa Book for Geniuses.',
    category: 'Learning',
  },
  {
    id: myId(),
    title: 'The history of React js',
    category: 'Biography',
  },

  {
    id: myId(),
    title: 'Guy lives in Burundi',
    category: 'History',
  },
];

export default initialState;
