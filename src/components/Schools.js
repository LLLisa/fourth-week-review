import React from 'react';
import { connect } from 'react-redux';
import { AddSchool, EditSchool } from './forms';
import { deleteSchool } from '../store';

class Schools extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSchoolId: 0,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSelection(ev) {
    this.setState({ selectedSchoolId: ev.target.value });
  }

  handleDelete(school) {
    console.log('//todo: handle delete button click');
  }

  render() {
    const { schools } = this.props;
    const selectedSchool = schools.find(
      (school) => school.id === this.state.selectedSchoolId * 1
    );
    return (
      <>
        <h3>List of Schools</h3>
        <select onMouseUp={this.handleSelection}>
          {schools.map((school) => {
            return (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            );
          })}
        </select>
        <h4>
          {/* below, the '?.' is called conditional chaining, look it up! */}
          Selected School: {selectedSchool?.name || 'No School Selected'}{' '}
          {selectedSchool && (
            <button onClick={() => this.handleDelete(selectedSchool)}>
              delete
            </button>
          )}
        </h4>
        <section id='forms'>
          <AddSchool />
          {selectedSchool ? <EditSchool school={selectedSchool} /> : ''}
        </section>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteSchool: (school) => dispatch(deleteSchool(school)),
  };
};
export default connect((state) => state, mapDispatch)(Schools);
