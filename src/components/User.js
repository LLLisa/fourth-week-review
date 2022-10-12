import React from 'react';

//destructuring in an arg list is preferred
const User = ({ userInfo }) => {
  //pulling the data we want from the props
  const { name, email } = userInfo;
  return (
    <ul>
      <li>name: {name}</li>
      <li>email: {email}</li>
    </ul>
  );
};

export default User;
