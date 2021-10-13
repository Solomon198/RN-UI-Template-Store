import {call, takeLeading, put} from 'redux-saga/effects';
import API from './api';
import {FetchOrders} from './actions';
import {ExtractOrdersInformation} from '../../../utilities/book.data.formatter';

function* watchFetchOrders() {
  yield takeLeading(FetchOrders.FETCH_ORDERS_CALLER, function* (action: any) {
    try {
      yield put({type: FetchOrders.FETCH_ORDERS_STARTED});
      // @ts-ignore
      const response = yield call(API.GetOrders.bind(null));
      const email = action.payload;
      const orders = ExtractOrdersInformation(response, email);
      yield put({type: FetchOrders.FETCH_ORDERS_SUCCESS, payload: orders});
    } catch (e: any) {
      console.log(e);
      yield put({type: FetchOrders.FETCH_ORDERS_FAILED, payload: e.message});
    }
  });
}

export default {
  watchFetchOrders,
};
