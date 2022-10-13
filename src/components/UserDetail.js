import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetail = ({ users }) => {
  const params = useParams();

  //why are we multiplying params.id by 1?
  const user = users.find((user) => user.id === params.id * 1);

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
