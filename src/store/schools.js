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
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/schools/', school);
      dispatch({ type: ADD_SCHOOL, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

const updateSchool = (school) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/schools/${school.id}`, school);
      dispatch({ type: UPDATE_SCHOOL, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteSchool = (school) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/schools/${school.id}`);
      dispatch({ type: DELETE_SCHOOL, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer---------------------------
const schoolReducer = (state = [], action) => {
  if (action.type === GET_SCHOOLS) return action.payload;
  if (action.type === ADD_SCHOOL) return [...state, action.payload];
  if (action.type === UPDATE_SCHOOL)
    return state.map((school) =>
      school.id === action.payload.id ? action.payload : school
    );
  if (action.type === DELETE_SCHOOL)
    return state.filter((school) => school.id !== action.payload.id);
  return state;
};

export { schoolReducer, getSchools, addSchool, updateSchool, deleteSchool };
