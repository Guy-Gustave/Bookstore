import { initialFilterState } from './BooksInitialState';

const filter = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.categoryName;
    default:
      return state;
  }
};

export default filter;
