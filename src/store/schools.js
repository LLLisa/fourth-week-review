import axios from 'axios';

//action creators---------------------
const GET_SCHOOLS = 'GET_SCHOOLS';
const ADD_SCHOOL = 'ADD_SCHOOL';

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
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/schools/', school);
      dispatch({ type: ADD_SCHOOL, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer---------------------------
const schoolReducer = (state = [], action) => {
  if (action.type === GET_SCHOOLS) return action.payload;
  if (action.type === ADD_SCHOOL) return [...state, action.payload];
  return state;
};

export { schoolReducer, getSchools, addSchool };
