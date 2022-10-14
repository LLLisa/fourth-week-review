import axios from 'axios';

//action constants---------------------------------
const GET_USERS = 'GET_USERS';

//thunks-------------------------------------
const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get('/api/users');
      dispatch({ type: GET_USERS, payload: users.data });
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

export { userReducer, getUsers };
