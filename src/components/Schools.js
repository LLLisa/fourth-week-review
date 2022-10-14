import React from 'react';
import { connect } from 'react-redux';
import { AddSchool, EditSchool } from './forms';
import { Link } from 'react-router-dom';

class Schools extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSchoolId: 0,
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(ev) {
    this.setState({ selectedSchoolId: ev.target.value });
  }

  render() {
    const { schools } = this.props;
    const selectedSchool = schools.find(
      (school) => school.id === this.state.selectedSchoolId * 1
    );
    return (
      <>
        <h3>List of Schools</h3>
        <select onChange={this.handleSelection}>
          {schools.map((school) => {
            return (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            );
          })}
        </select>
        <h4>
          Selected School:{' '}
          {selectedSchool ? (
            <Link to={`edit/${selectedSchool.id}`}>{selectedSchool.name}</Link>
          ) : (
            ''
          )}
        </h4>
        <AddSchool />
      </>
    );
  }
}
export default connect((state) => state)(Schools);
