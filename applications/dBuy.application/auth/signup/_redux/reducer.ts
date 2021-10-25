import {SignUpInputs, SignUpNewAccount} from './actions';
const intialState = {
  signupStatus: SignUpNewAccount.SIGNUP_ACCOUNT_DEFAULT,
  signupError: '',
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case SignUpInputs.SET_SIGNUP_INPUT: {
      const {inputName, value} = action;
      state = {
        ...state,
        [inputName]: value,
      };
      return state;
    }

    case SignUpNewAccount.SIGNUP_ACCOUNT_STARTED: {
      state = {
        ...state,
        signupStatus: SignUpNewAccount.SIGNUP_ACCOUNT_STARTED,
        signupError: '',
      };

      return state;
    }

    case SignUpNewAccount.SIGNUP_ACCOUNT_FAILED: {
      state = {
        ...state,
        signupStatus: SignUpNewAccount.SIGNUP_ACCOUNT_FAILED,
        signupError: action.payload,
      };

      return state;
    }

    case SignUpNewAccount.SIGNUP_ACCOUNT_SUCCESS: {
      state = {
        ...state,
        signupStatus: SignUpNewAccount.SIGNUP_ACCOUNT_SUCCESS,
        signupError: '',
      };

      return state;
    }
  }

  return state;
}

export default Reducer;
