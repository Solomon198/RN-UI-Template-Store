import {InputCard, Payment} from './actions';
const intialState = {
  cardNumber: '',
  paymentStatus: Payment.PAYMENT_DEFAULT,
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case InputCard.SET_CREDIT_CARD_INPUT: {
      state = {
        ...state,
        cardNumber: action.payload,
      };
      return state;
    }

    case Payment.PAYMENT_STARTED: {
      state = {
        ...state,
        paymentStatus: Payment.PAYMENT_STARTED,
      };
      return state;
    }

    case Payment.PAYMENT_FAILED: {
      state = {
        ...state,
        paymentStatus: Payment.PAYMENT_FAILED,
      };
      return state;
    }

    case Payment.PAYMENT_SUCCESS: {
      state = {
        ...state,
        paymentStatus: Payment.PAYMENT_SUCCESS,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
