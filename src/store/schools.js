import axios from 'axios';

//action creators---------------------
const GET_SCHOOLS = 'GET_SCHOOLS';
const ADD_SCHOOL = 'ADD_SCHOOL';
const UPDATE_SCHOOL = 'UPDATE_SCHOOL';
const DELETE_SCHOOL = 'DELETE_SCHOOL';

//thunks--------------------------
const getSchools = () => {
  return async (dispatch) => {
    try {
      const schools = await axios.get('/api/schools');
      dispatch({ type: GET_SCHOOLS, payload: schools.data });
    } catch (error) {
      console.log(error);
    }
  };
};

const addSchool = (school) => {
  //this will return a function that makes an axios call and then
  //send the response to the reducer
};

//reducer---------------------------
const schoolReducer = (state = [], action) => {
  if (action.type === GET_SCHOOLS) return action.payload;
  if (action.type === ADD_SCHOOL) return [...state, action.payload];
  if (action.type === UPDATE_SCHOOL) {
    /*return a new state with the updated school in place of the old one*/
  }
  if (action.type === DELETE_SCHOOL) {
    /*return a new state without the deleted school*/
  }
  return state;
};

export {
  schoolReducer,
  getSchools,
  addSchool /* anything else yo be exported goes here */,
};
