import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//destructuring?
const Users = ({ userList }) => {
  return (
    <div>
      <h3>List of Users</h3>
      <ul>
        {userList.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return { userList: state.users };
};

export default connect(mapState)(Users);
