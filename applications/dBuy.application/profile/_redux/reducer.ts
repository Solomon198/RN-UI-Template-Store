import {SignUpSuccess, UpdateAccount, Logout, LoginSuccess} from './actions';
const intialState = {
  user: {} as entities.User,
  updateAccountStatus: UpdateAccount.UPDATE_ACCOUNT_DEFAULT,
  UpdateAccountError: '',
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case Logout.DO_LOGOUT: {
      state = {
        ...state,
        user: {} as entities.User,
      };
      return state;
    }

    case SignUpSuccess.SIGNUP_ACCOUNT_SUCCESS: {
      state = {
        ...state,
        user: action.payload,
      };
      return state;
    }

    case LoginSuccess.LOGIN_SUCCESS: {
      state = {
        ...state,
        user: action.payload,
      };
      return state;
    }

    case UpdateAccount.UPDATE_ACCOUNT_STARTED: {
      state = {
        ...state,
        updateAccountStatus: UpdateAccount.UPDATE_ACCOUNT_STARTED,
        UpdateAccountError: '',
      };
      return state;
    }

    case UpdateAccount.UPDATE_ACCOUNT_FAILED: {
      state = {
        ...state,
        updateAccountStatus: UpdateAccount.UPDATE_ACCOUNT_FAILED,
        UpdateAccountError: action.payload,
      };
      return state;
    }

    case UpdateAccount.UPDATE_ACCOUNT_SUCCESS: {
      state = {
        ...state,
        updateAccountStatus: UpdateAccount.UPDATE_ACCOUNT_SUCCESS,
        UpdateAccountError: '',
        user: action.payload,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
