import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
              <Link to={`user/${user.id}`}>{user.name}</Link>
              {/* <User userInfo={user} /> */}
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
