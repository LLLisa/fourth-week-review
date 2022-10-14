import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { schoolReducer } from './schools';
import { userReducer } from './users';
import { companyReducer } from './companies';

//create the store----------------------------------
const reducer = combineReducers({
  users: userReducer,
  schools: schoolReducer,
  companies: companyReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
//this will take all exports from './users' and export this from this file,
//meaning that all those thunks can be imported from './store'
export * from './users';
export * from './schools';
export * from './companies';
