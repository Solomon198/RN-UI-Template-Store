import {call, takeLeading, put, takeEvery} from 'redux-saga/effects';
import API from './api';
import {Payment, InputCard} from './actions';
import {Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import NavigationScreens from '../../_config_/navigation.configuration/navigation.screens';

function* watchPayment() {
  yield takeLeading(Payment.PAYMENT_CALLER, function* (action: any) {
    try {
      yield put({type: Payment.PAYMENT_STARTED});
      // @ts-ignore
      const payment = yield call(API.Pay.bind(null, action.payload));
      const transactionRef = payment.reference;
      const createOrderPayload = action.data;
      createOrderPayload.payment_method_title = transactionRef;
      yield call(API.CreateOrder.bind(null, createOrderPayload));
      yield put({type: Payment.PAYMENT_SUCCESS});
      Navigation.popToRoot(NavigationScreens.LIBRARY_BOOKS_PAYMENT_SCREEN);
      Alert.alert(
        'success',
        'Order created successfully, you can see all your orders when you click on the link at the sidemenu',
      );
    } catch (e: any) {
      console.log(e);
      Alert.alert('', 'Unable to make order, please try again');
      yield put({type: Payment.PAYMENT_FAILED, payload: e.message});
    }
  });
}

function* watchSetCardInput() {
  yield takeEvery(
    InputCard.SET_CREDIT_CARD_INPUT_CALLER,
    function* (action: any) {
      yield put({
        type: InputCard.SET_CREDIT_CARD_INPUT,
        payload: action.payload,
      });
    },
  );
}

export default {
  watchSetCardInput,
  watchPayment,
};
