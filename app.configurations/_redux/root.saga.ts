import {all} from 'redux-saga/effects';
import BooksSaga from '../../applications/library.application/books/_redux/saga';
import ViewBookSaga from '../../applications/library.application/view.book/_redux/saga';

export default function* rootSaga() {
  yield all([
    BooksSaga.watchGetBooks(),
    BooksSaga.watchSetSelectedBook(),

    ViewBookSaga.watchAddToCart(),
  ]);
}
