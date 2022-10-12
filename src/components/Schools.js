import React from 'react';
import { connect } from 'react-redux';

const Schools = (props) => {
  console.log(props);
  return (
    <div>
      <h3>List of Schools</h3>
      <select>
        {/* {[<li>one</li>, <li>two</li>, <li>three</li>]} */}
        {props.schools.map((school) => {
          return <option key={school.id}>{school.name}</option>;
        })}
      </select>
    </div>
  );
};

export default connect((state) => state)(Schools);
