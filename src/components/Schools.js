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
    console.log('//todo: handle the select element');
  }

  handleDelete(school) {
    console.log('//todo: handle delete button click');
  }

  render() {
    const { schools } = this.props;
    const selectedSchool = '//should be the school matching selectedSchoolId';
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
          Selected School: {selectedSchool?.name || 'No School Selected'}
          {selectedSchool && (
            <button onClick={() => this.handleDelete(selectedSchool)}>
              delete
            </button>
          )}
        </h4>
        <section id='forms'>
          <AddSchool />
          {/* the EditSchool component should only display when a school is selected */}
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
