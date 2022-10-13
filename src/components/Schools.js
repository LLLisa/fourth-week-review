import React from 'react';
import { connect } from 'react-redux';

const Schools = (props) => {
  let selection = '';
  const handleSelection = (ev) => {
    console.log(ev.target.value);
    selection = ev.target.value;
  };

  return (
    <div>
      <h3>List of Schools</h3>
      <select onChange={handleSelection}>
        {props.schools.map((school) => {
          return (
            <option key={school.id} value={school.name}>
              {school.name}
            </option>
          );
        })}
      </select>
      <h4>{selection}</h4>
    </div>
  );
};

export default connect((state) => state)(Schools);
