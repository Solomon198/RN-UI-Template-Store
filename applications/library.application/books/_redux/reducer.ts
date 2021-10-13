import moment from 'moment';
import {FetchBooks, ViewSelectedBook} from './actions';
const intialState: ReduxStore.Books = {
  books: [],
  fetchBookStatus: FetchBooks.FETCH_BOOK_DEFAULT,
  fetchBooksError: '',
  page: 1,
  selectedBook: {} as entities.Book,
  lastFetched: '',
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case ViewSelectedBook.SET_SELECTED_VIEW: {
      state = {
        ...state,
        selectedBook: action.payload,
      };
      return state;
    }
    case FetchBooks.FETCH_BOOK_STARTED: {
      state = {
        ...state,
        fetchBookStatus: FetchBooks.FETCH_BOOK_STARTED,
        fetchBooksError: '',
      };
      return state;
    }

    case FetchBooks.FETCH_BOOK_STARTED: {
      state = {
        ...state,
        fetchBookStatus: FetchBooks.FETCH_BOOK_STARTED,
        fetchBooksError: action.payload,
      };
      return state;
    }

    case FetchBooks.FETCH_BOOK_SUCCESS: {
      state = {
        ...state,
        books: action.payload,
        fetchBookStatus: FetchBooks.FETCH_BOOK_SUCCESS,
        fetchBooksError: '',
        // page: state.page + 1,
      };
      if (action.resset) {
        state.lastFetched = moment();
      }
      return state;
    }
  }

  return state;
}

export default Reducer;
