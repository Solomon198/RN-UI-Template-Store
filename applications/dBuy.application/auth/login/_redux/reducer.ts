import {Login} from './actions';
const intialState = {
  loginStatus: Login.LOGIN_DEFAULT,
  loginError: '',
};

function Reducer(state = intialState, action: any) {
  switch (action.type) {
    case Login.LOGIN_STARTED: {
      state = {
        ...state,
        loginStatus: Login.LOGIN_STARTED,
        loginError: '',
      };
      return state;
    }

    case Login.LOGIN_SUCCESS: {
      state = {
        ...state,
        loginStatus: Login.LOGIN_SUCCESS,
        loginError: '',
      };
      return state;
    }

    case Login.LOGIN_FAILED: {
      state = {
        ...state,
        loginStatus: Login.LOGIN_FAILED,
        loginError: action.payload,
      };
      return state;
    }
  }

  return state;
}

export default Reducer;
