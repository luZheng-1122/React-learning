import { combineReducers } from 'redux';
import ListReducer from './listReducer';
import ConfigReducer from './configReducer'

const rootReducer = combineReducers({
  list: ListReducer,
  config: ConfigReducer
});

export default rootReducer;
