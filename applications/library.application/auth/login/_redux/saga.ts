import {call, takeLeading, put} from 'redux-saga/effects';
import API from './api';
import {Login} from './actions';
import {Navigation} from 'react-native-navigation';
import NavigationScreens from '../../../_config_/navigation.configuration/navigation.screens';
import {
  exchangeCustomerDataForm,
  handleFailedRequests,
} from '../../../../utilities/book.data.formatter';
import {Alert} from 'react-native';
import {handleNavigation} from '../../../_config_/navigation.configuration/navigationActions';

function* watchLogin() {
  yield takeLeading(Login.LOGIN_CALLER, function* (action: any) {
    try {
      yield put({type: Login.LOGIN_STARTED});
      // @ts-ignore
      const login = yield call(API.login.bind(null, action.payload));
      const customer = exchangeCustomerDataForm(login.data.payload);
      yield put({type: Login.LOGIN_SUCCESS, payload: customer});
      if (action.fromCheckout) {
        handleNavigation(
          NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN,
          NavigationScreens.LIBRARY_BOOKS_PAYMENT_SCREEN,
        );
      } else {
        Navigation.pop(NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN);
      }
    } catch (e: any) {
      const {errorMessage} = handleFailedRequests(e);
      Alert.alert('', errorMessage);
      yield put({type: Login.LOGIN_FAILED, payload: errorMessage});
    }
  });
}

export default {
  watchLogin,
};
