import {all} from 'redux-saga/effects';
import BooksSaga from '../../books/_redux/saga';
import ViewBookSaga from '../../view.book/_redux/saga';
import ThemeSaga from '../../../../app.configurations/theme/theme.saga';
import SearchSaga from '../../search.book/_redux/saga';
import SignUpSaga from '../../auth/signup/_redux/saga';
import ProfileSaga from '../../profile/_redux/saga';
import LoginSaga from '../../auth/login/_redux/saga';
import PaymentSaga from '../../payment/_redux/saga';
import OrderSaga from '../../view.order/_redux/saga';

export default function* rootSaga() {
  yield all([
    OrderSaga.watchFetchOrders(),

    PaymentSaga.watchPayment(),
    PaymentSaga.watchSetCardInput(),

    LoginSaga.watchLogin(),

    ProfileSaga.watchUpdateProfile(),
    ProfileSaga.watchDoLogout(),

    SignUpSaga.watchSetInput(),
    SignUpSaga.watchSignUp(),

    SearchSaga.watchSearchBook(),

    BooksSaga.watchGetBooks(),
    BooksSaga.watchSetSelectedBook(),

    ThemeSaga.watchToggleTheme(),

    ViewBookSaga.watchAddToCart(),
  ]);
}
