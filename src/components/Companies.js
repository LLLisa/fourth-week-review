import React from 'react';
import { connect } from 'react-redux';

const Companies = ({ companyList }) => {
  return (
    <>
      <ul>
        {companyList.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    companyList: state.companies,
  };
};

export default connect(mapState)(Companies);
