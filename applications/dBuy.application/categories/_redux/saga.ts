import {takeLatest, put, call} from 'redux-saga/effects';
import {multiFormatBooksProperties} from '../../../utilities/book.data.formatter';
import {GetBookByCategorie} from './actions';
import API from './api';

function* watchGetBookByCategory() {
  yield takeLatest(
    GetBookByCategorie.GET_BOOK_BY_CATEGORY_CALLER,
    function* (action: any) {
      try {
        yield put({type: GetBookByCategorie.GET_BOOK_BY_CATEGORY_STARTED});
        // @ts-ignore
        const books = yield call(
          API.GetBookByCategorie.bind(null, action.queryParams),
        );
        const formatBooks = multiFormatBooksProperties(books);
        const queryParams = action.queryParams as entities.queryParams;
        if (formatBooks.length === 0) {
          queryParams.hasNextPage = false;
        } else {
          queryParams.hasNextPage = true;
        }
        yield put({
          type: GetBookByCategorie.GET_BOOK_BY_CATEGORY_SUCCESS,
          payload: formatBooks,
          queryParams,
          isRefreshing: action.isRefreshing,
        });
      } catch (e: any) {
        yield put({
          type: GetBookByCategorie.GET_BOOK_BY_CATEGORY_FAILED,
          payload: e.message,
        });
      }
    },
  );
}

export default {
  watchGetBookByCategory,
};
