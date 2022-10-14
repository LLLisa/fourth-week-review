import React from 'react';
import { connect } from 'react-redux';
import { updateSchool } from '../../store';

class EditSchool extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { name, address } = this.props.school;
    this.setState({ name: name });
    this.setState({ address: address });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.school.id !== this.props.school.id) {
      const { name, address } = this.props.school;
      this.setState({ name: name });
      this.setState({ address: address });
    }
  }

  async handleTyping(ev) {
    await this.setState({ [ev.target.name]: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const updateInfo = {
      id: this.props.school.id,
      name: this.state.name,
      address: this.state.address,
    };
    this.props.updateSchool(updateInfo);
  }

  render() {
    const { name, address } = this.state;
    return (
      <>
        <label htmlFor='edit-school'>Update the Selected School:</label>
        <form name='edit-school'>
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
              placeholder='Update School Name'
              onChange={this.handleTyping}
            ></input>
            <input
              name='address'
              value={address}
              placeholder='Update School Address'
              onChange={this.handleTyping}
            ></input>
          </section>
          <button onClick={this.handleSubmit}>Update</button>
        </form>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateSchool: (school) => dispatch(updateSchool(school)),
  };
};

export default connect(null, mapDispatch)(EditSchool);
