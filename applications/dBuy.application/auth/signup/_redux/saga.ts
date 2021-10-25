import {Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {takeEvery, put, takeLeading, call} from 'redux-saga/effects';
import {
  handleFailedRequests,
  exchangeCustomerDataForm,
} from '../../../../utilities/book.data.formatter';
import NavigationScreens from '../../../_config_/navigation.configuration/navigation.screens';
import {SignUpInputs, SignUpNewAccount} from './actions';
import API from './api';

function* watchSetInput() {
  yield takeEvery(
    SignUpInputs.SET_SIGNUP_INPUT_CALLER,
    function* (action: any) {
      yield put({
        type: SignUpInputs.SET_SIGNUP_INPUT,
        inputName: action.inputName,
        value: action.value,
      });
    },
  );
}

function* watchSignUp() {
  yield takeLeading(
    SignUpNewAccount.SIGNUP_ACCOUNT_CALLER,
    function* (action: any) {
      try {
        yield put({type: SignUpNewAccount.SIGNUP_ACCOUNT_STARTED});
        // @ts-ignore
        const dosignup = yield call(API.signup.bind(null, action.payload));
        const customer = exchangeCustomerDataForm(dosignup.data.payload);
        yield put({
          type: SignUpNewAccount.SIGNUP_ACCOUNT_SUCCESS,
          payload: customer,
        });
        Navigation.pop(NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN);
      } catch (e) {
        const {errorMessage} = handleFailedRequests(e);
        Alert.alert('', errorMessage);
        yield put({
          type: SignUpNewAccount.SIGNUP_ACCOUNT_FAILED,
          payload: errorMessage,
        });
      }
    },
  );
}

export default {
  watchSetInput,
  watchSignUp,
};
