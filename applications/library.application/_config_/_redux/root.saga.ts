import {all} from 'redux-saga/effects';
import BooksSaga from '../../books/_redux/saga';
import ViewBookSaga from '../../view.book/_redux/saga';
import ThemeSaga from '../../../../app.configurations/theme/theme.saga';

export default function* rootSaga() {
  yield all([
    BooksSaga.watchGetBooks(),
    BooksSaga.watchSetSelectedBook(),

    ThemeSaga.watchToggleTheme(),

    ViewBookSaga.watchAddToCart(),
  ]);
}
