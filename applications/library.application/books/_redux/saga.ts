import {call, takeLeading, put} from 'redux-saga/effects';
import API from './api';
import {FetchBooks, ViewSelectedBook} from './actions';
import {
  formatCategories,
  handleFailedRequests,
  multiFormatBooksProperties,
} from '../../../utilities/book.data.formatter';

function* watchGetBooks() {
  yield takeLeading(FetchBooks.FETCH_BOOK_CALLER, function* (action: any) {
    try {
      yield put({type: FetchBooks.FETCH_BOOK_STARTED});
      // @ts-ignore
      const books = yield call(API.GetBooks.bind(null, action.queryParams));
      // @ts-ignore
      const categories = yield call(API.GetBookCategories.bind(null));
      const formattedCategories = formatCategories(categories);
      const formatBooks = multiFormatBooksProperties(books);
      const queryParams = action.queryParams as entities.queryParams;
      if (formatBooks.length === 0) {
        queryParams.hasNextPage = false;
      } else {
        queryParams.hasNextPage = true;
      }
      yield put({
        type: FetchBooks.FETCH_BOOK_SUCCESS,
        payload: formatBooks,
        queryParams,
        isRefreshing: action.isRefreshing,
        categories: formattedCategories,
      });
    } catch (e: any) {
      const {errorMessage} = handleFailedRequests(e);
      yield put({type: FetchBooks.FETCH_BOOK_FAILED, payload: errorMessage});
    }
  });
}

function* watchSetSelectedBook() {
  yield takeLeading(
    ViewSelectedBook.SET_SELECTED_VIEW_CALLER,
    function* (action: ReduxStore.sagaAction) {
      yield put({
        type: ViewSelectedBook.SET_SELECTED_VIEW,
        payload: action.payload,
      });
    },
  );
}

export default {
  watchGetBooks,
  watchSetSelectedBook,
};
