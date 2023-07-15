import { combineReducers } from 'redux';
import { vehicles } from './vehicles.reducers';

export const rootReducer = combineReducers({
  vehicles,
});
