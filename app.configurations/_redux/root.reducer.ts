import {combineReducers} from 'redux';
import BooksReducer from '../../applications/library.application/books/_redux/reducer';
import ViewBookReducer from '../../applications/library.application/view.book/_redux/reducer';
const rootReducer = combineReducers({
  Books: BooksReducer,
  BooksCart: ViewBookReducer,
});

export default rootReducer;
