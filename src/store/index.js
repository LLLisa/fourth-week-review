import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { schoolReducer } from './schools';
import { userReducer } from './users';

//create the store----------------------------------
const reducer = combineReducers({
  users: userReducer,
  schools: schoolReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
//this will take all exports from './users' and export this from this file,
//which is the index for the store directory
export * from './users';
export * from './schools';
