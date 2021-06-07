import {combineReducers} from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import searchReducer from './searchReducer';
// import mitraOrderReducer from './mitraOrderReducer';
import orderUserReducer from './orderUserReducer';

export default combineReducers({
  userReducer,
  categoryReducer,
  searchReducer,
  // mitraOrderReducer,
  orderUserReducer,
});
