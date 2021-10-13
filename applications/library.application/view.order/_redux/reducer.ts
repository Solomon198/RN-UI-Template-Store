import {FetchOrders} from './actions';
const intialState = {
  orders: [] as entities.Order[],
  fetchOrderStatus: FetchOrders.FETCH_ORDERS_DEFAULT,
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case FetchOrders.FETCH_ORDERS_STARTED: {
      state = {
        ...state,
        fetchOrderStatus: FetchOrders.FETCH_ORDERS_STARTED,
      };
      return state;
    }

    case FetchOrders.FETCH_ORDERS_FAILED: {
      state = {
        ...state,
        fetchOrderStatus: FetchOrders.FETCH_ORDERS_FAILED,
      };
      return state;
    }

    case FetchOrders.FETCH_ORDERS_SUCCESS: {
      state = {
        ...state,
        fetchOrderStatus: FetchOrders.FETCH_ORDERS_SUCCESS,
        orders: action.payload,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
