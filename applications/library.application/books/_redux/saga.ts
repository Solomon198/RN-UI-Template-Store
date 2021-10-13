import {call, takeLeading, put} from 'redux-saga/effects';
import API from './api';
import {FetchBooks, ViewSelectedBook} from './actions';
import {
  handleFailedRequests,
  multiFormatBooksProperties,
} from '../../../utilities/book.data.formatter';
import moment from 'moment';
import RealmQueries from '../../realm/realm.config';

function* watchGetBooks() {
  yield takeLeading(FetchBooks.FETCH_BOOK_CALLER, function* (action: any) {
    try {
      yield put({type: FetchBooks.FETCH_BOOK_STARTED});
      const now = moment();
      const end = action.payload;

      if (now.diff(end, 'hours') > 5 || !action.payload) {
        // @ts-ignore
        const books = yield call(API.GetBooks.bind(null));
        const formatBooks = multiFormatBooksProperties(books);
        RealmQueries.saveProducts(formatBooks);
        yield put({
          type: FetchBooks.FETCH_BOOK_SUCCESS,
          payload: formatBooks,
          resset: true,
        });
      } else {
        const books = RealmQueries.getProducts();
        yield put({type: FetchBooks.FETCH_BOOK_SUCCESS, payload: books});
      }
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
