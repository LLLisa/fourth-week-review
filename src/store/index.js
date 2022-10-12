import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//action constants---------------------------------
const GET_USERS = 'GET_USERS';
const GET_SCHOOLS = 'GET_SCHOOLS';

//thunks-------------------------------------
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('/api/users');
      dispatch({ type: GET_USERS, payload: users.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSchools = () => {
  return async (dispatch) => {
    try {
      const schools = await axios.get('/api/schools');
      dispatch({ type: GET_SCHOOLS, payload: schools.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//reducers--------------------------------------
const userReducer = (state = [], action) => {
  if (action.type === GET_USERS) return action.payload;
  return state;
};

const schoolReducer = (state = [], action) => {
  if (action.type === GET_SCHOOLS) return action.payload;
  return state;
};

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
