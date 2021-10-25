import {GetBookByCategorie} from './actions';
const intialState = {
  books: [] as entities.Book[],
  getBookStatus: GetBookByCategorie.GET_BOOK_BY_CATEGORY_DEFAULT,
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
    case GetBookByCategorie.GET_BOOK_BY_CATEGORY_SUCCESS: {
      state = {
        ...state,
        books: action.isRefreshing
          ? action.payload
          : [...state.books, ...action.payload],
        getBookStatus: GetBookByCategorie.GET_BOOK_BY_CATEGORY_SUCCESS,
        queryParams: action.queryParams,
      };
      return state;
    }

    case GetBookByCategorie.GET_BOOK_BY_CATEGORY_FAILED: {
      state = {
        ...state,
        getBookStatus: GetBookByCategorie.GET_BOOK_BY_CATEGORY_FAILED,
      };
      return state;
    }

    case GetBookByCategorie.GET_BOOK_BY_CATEGORY_STARTED: {
      state = {
        ...state,
        getBookStatus: GetBookByCategorie.GET_BOOK_BY_CATEGORY_STARTED,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
