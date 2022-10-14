import React from 'react';
import { connect } from 'react-redux';
import { addSchool } from '../../store';

class AddSchool extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //async/await here?
  async handleTyping(ev) {
    await this.setState({ [ev.target.name]: ev.target.value });
    // console.log(this.state.name);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { name, address } = this.state;
    this.props.addSchool({ name, address });
  }

  render() {
    const { name, address } = this.state;
    return (
      <>
        <label htmlFor='add-school'>Create a New School:</label>
        <form name='add-school'>
          <section
            id='input-fields'
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '40%',
            }}
          >
            <input
              name='name'
              value={name}
              placeholder='Name of School'
              onChange={this.handleTyping}
            ></input>
            <input
              name='address'
              value={address}
              placeholder='Address of School'
              onChange={this.handleTyping}
            ></input>
          </section>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addSchool: (school) => dispatch(addSchool(school)),
  };
};

export default connect(null, mapDispatch)(AddSchool);
