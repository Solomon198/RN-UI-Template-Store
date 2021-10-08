import {call, takeLeading, put} from 'redux-saga/effects';
import API from './api';
import {FetchBooks, ViewSelectedBook} from './actions';
import {handleViewBook} from '../../_config_/navigation.configuration/navigationActions';

function* watchGetBooks() {
  yield takeLeading(FetchBooks.FETCH_BOOK_CALLER, function* () {
    try {
      yield put({type: FetchBooks.FETCH_BOOK_STARTED});
      // @ts-ignore
      const books = yield call(API.GetBooks.bind(null));
      yield put({type: FetchBooks.FETCH_BOOK_SUCCESS, payload: books});
    } catch (e: any) {
      yield put({type: FetchBooks.FETCH_BOOK_FAILED, payload: e.message});
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

      handleViewBook();
    },
  );
}

export default {
  watchGetBooks,
  watchSetSelectedBook,
};
