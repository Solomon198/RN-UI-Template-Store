import {takeLeading, put} from 'redux-saga/effects';
import {AddCart} from './actions';

function* watchAddToCart() {
  yield takeLeading(AddCart.ADD_TO_CART_CALLER, function* (action: any) {
    yield put({
      type: AddCart.ADD_TO_CART,
      payload: action.payload,
      isAdding: action.isAdding,
    });
  });
}

export default {
  watchAddToCart,
};
