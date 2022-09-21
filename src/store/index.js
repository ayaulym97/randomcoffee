import { legacy_createStore, combineReducers } from 'redux';
import authReducer from './reducer/authReducer'
const rootReducer = combineReducers(
{ auth: authReducer, }
);
const configureStore = () => {
return legacy_createStore(rootReducer);
}
export default configureStore;