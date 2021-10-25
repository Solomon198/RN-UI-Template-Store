import {takeLatest, put, call} from 'redux-saga/effects';
import {multiFormatBooksProperties} from '../../../utilities/book.data.formatter';
import {SearchBook} from './actions';
import API from './api';

function* watchSearchBook() {
  yield takeLatest(SearchBook.SEARCH_BOOK_CALLER, function* (action: any) {
    try {
      yield put({type: SearchBook.SEARCH_BOOK_STARTED});
      // @ts-ignore
      const books = yield call(API.SearchBook.bind(null, action.queryParams));
      const formatBooks = multiFormatBooksProperties(books);
      yield put({type: SearchBook.SEARCH_BOOK_SUCCESS, payload: formatBooks});
    } catch (e: any) {
      yield put({type: SearchBook.SEARCH_BOOK_FAILED, payload: e.message});
    }
  });
}

export default {
  watchSearchBook,
};
