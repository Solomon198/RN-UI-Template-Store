import {combineReducers} from 'redux';
import BooksReducer from '../../books/_redux/reducer';
import ViewBookReducer from '../../view.book/_redux/reducer';
import ThemeReducer from '../../../../app.configurations/theme/theme.reducer';

const rootReducer = combineReducers({
  Books: BooksReducer,
  BooksCart: ViewBookReducer,
  Theme: ThemeReducer,
});

export default rootReducer;
