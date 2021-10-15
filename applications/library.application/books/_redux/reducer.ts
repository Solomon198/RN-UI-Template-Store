import moment from 'moment';
import {FetchBooks, ViewSelectedBook} from './actions';
const intialState: ReduxStore.Books = {
  books: [],
  fetchBookStatus: FetchBooks.FETCH_BOOK_DEFAULT,
  fetchBooksError: '',
  selectedBook: {} as entities.Book,
  lastFetched: '',
  isRefreshing: false,
  categories: [] as entities.BookCategories[],
  queryParams: {
    page: 1,
    search: '',
    category: '',
    per_page: 20,
    hasNextPage: true,
  },
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
        books: action.isRefreshing
          ? action.payload
          : [...state.books, ...action.payload],
        fetchBookStatus: FetchBooks.FETCH_BOOK_SUCCESS,
        fetchBooksError: '',
        queryParams: action.queryParams,
        isRefreshing: action.isRefreshing,
        categories: action.categories,
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
