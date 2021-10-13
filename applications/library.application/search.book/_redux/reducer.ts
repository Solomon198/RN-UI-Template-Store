import {SearchBook} from './actions';
const intialState = {
  searchResult: [] as entities.Book[],
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case SearchBook.SEARCH_BOOK_SUCCESS: {
      state = {
        ...state,
        searchResult: action.payload,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
