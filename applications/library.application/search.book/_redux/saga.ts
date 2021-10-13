import {takeLeading, put} from 'redux-saga/effects';
import {SearchBook} from './actions';
import RealmQueries from '../../realm/realm.config';

function* watchSearchBook() {
  yield takeLeading(SearchBook.SEARCH_BOOK_CALLER, function* (action: any) {
    try {
      yield put({type: SearchBook.SEARCH_BOOK_STARTED});
      // @ts-ignore
      const books = RealmQueries.searchProduct(action.payload);
      yield put({type: SearchBook.SEARCH_BOOK_SUCCESS, payload: books});
    } catch (e: any) {
      yield put({type: SearchBook.SEARCH_BOOK_FAILED, payload: e.message});
    }
  });
}

export default {
  watchSearchBook,
};
