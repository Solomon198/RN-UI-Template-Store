import {SearchBook} from './actions';
const intialState = {
  searchResult: [] as entities.Book[],
  searchStatus: SearchBook.SEARCH_BOOK_DEFAULT,
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case SearchBook.SEARCH_BOOK_SUCCESS: {
      state = {
        ...state,
        searchResult: action.payload,
        searchStatus: SearchBook.SEARCH_BOOK_SUCCESS,
      };
      return state;
    }

    case SearchBook.SEARCH_BOOK_FAILED: {
      state = {
        ...state,
        searchStatus: SearchBook.SEARCH_BOOK_FAILED,
      };
      return state;
    }

    case SearchBook.SEARCH_BOOK_STARTED: {
      state = {
        ...state,
        searchStatus: SearchBook.SEARCH_BOOK_STARTED,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
