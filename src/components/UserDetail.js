import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  return (
    <>
      <h3>{user.name}</h3>
      <ul>
        <li>age: {user.age}</li>
        <li>email: {user.email}</li>
      </ul>
    </>
  );
};

export default connect((state) => state)(UserDetail);
