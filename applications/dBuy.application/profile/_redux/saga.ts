import {call, takeLeading, put, takeEvery} from 'redux-saga/effects';
import API from './api';
import {UpdateAccount, Logout} from './actions';
import {
  exchangeCustomerDataForm,
  handleFailedRequests,
} from '../../../utilities/book.data.formatter';
import NavigationScreens from '../../_config_/navigation.configuration/navigation.screens';
import {Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';

function* watchUpdateProfile() {
  yield takeLeading(
    UpdateAccount.UPDATE_ACCOUNT_CALLER,
    function* (action: any) {
      try {
        yield put({type: UpdateAccount.UPDATE_ACCOUNT_STARTED});
        // @ts-ignore
        const dosignup = yield call(
          API.UpdateProfile.bind(null, action.payload),
        );
        const customer = exchangeCustomerDataForm(dosignup);
        console.log(customer);

        yield put({
          type: UpdateAccount.UPDATE_ACCOUNT_SUCCESS,
          payload: customer,
        });
        Navigation.pop(NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN);
      } catch (e) {
        console.log(e);
        const {errorMessage} = handleFailedRequests(e);
        Alert.alert('', errorMessage);
        yield put({
          type: UpdateAccount.UPDATE_ACCOUNT_FAILED,
          payload: errorMessage,
        });
      }
    },
  );
}

export function* watchDoLogout() {
  yield takeEvery(Logout.DO_LOGOUT_CALLER, function* () {
    yield put({type: Logout.DO_LOGOUT});
    Alert.alert('', 'Logged out successfully');
  });
}
export default {
  watchUpdateProfile,
  watchDoLogout,
};
