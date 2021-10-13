import {combineReducers} from 'redux';
import BooksReducer from '../../books/_redux/reducer';
import ViewBookReducer from '../../view.book/_redux/reducer';
import ThemeReducer from '../../../../app.configurations/theme/theme.reducer';
import SearchReducer from '../../search.book/_redux/reducer';
import ProfileReducer from '../../profile/_redux/reducer';
import SignUpReducer from '../../auth/signup/_redux/reducer';
import LoginReducer from '../../auth/login/_redux/reducer';
import PaymentReducer from '../../payment/_redux/reducer';
import OrderReducer from '../../view.order/_redux/reducer';

const rootReducer = combineReducers({
  Books: BooksReducer,
  BooksCart: ViewBookReducer,
  Theme: ThemeReducer,
  Search: SearchReducer,
  Profile: ProfileReducer,
  SignUp: SignUpReducer,
  Login: LoginReducer,
  Payment: PaymentReducer,
  Orders: OrderReducer,
});

export default rootReducer;
