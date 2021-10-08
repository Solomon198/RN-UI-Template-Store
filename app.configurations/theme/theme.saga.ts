import {takeEvery, put} from 'redux-saga/effects';
import {ThemeAction} from './theme.actions';

function* watchToggleTheme() {
  yield takeEvery(ThemeAction.TOGGLE_THEME_CALLER, function* () {
    yield put({type: ThemeAction.TOGGLE_THEME});
  });
}

export default {
  watchToggleTheme,
};
