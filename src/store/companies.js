import axios from 'axios';

//constants----------------
const GET_COMPANIES = 'GET_COMPANIES';

//thynks------------------------
const getCompanies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/companies');
      dispatch({ type: GET_COMPANIES, companies: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer-------------------------
const companyReducer = (state = [], action) => {
  if (action.type === GET_COMPANIES) return action.companies;
  return state;
};

export { getCompanies, companyReducer };
