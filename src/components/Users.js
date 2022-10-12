import React from 'react';
import { connect } from 'react-redux';
import User from './User';

//destructuring?
const Users = (props) => {
  return (
    <div>
      <h3>List of Users</h3>
      <ul>
        {props.userList.map((user) => {
          return (
            <li key={user.id}>
              <User userInfo={user} />
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
