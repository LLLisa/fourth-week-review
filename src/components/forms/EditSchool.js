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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // we should pull name and address for props and assign them to the local state
  }

  //what the heck is componentDidUpdate()???
  componentDidUpdate(prevProps) {
    if (prevProps.school.id !== this.props.school.id) {
      // this should do the same thing as componentDidMount()
      // be careful not to make an infinite loop!
    }
  }

  async handleTyping(ev) {
    await this.setState({ [ev.target.name]: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    //we should make an object with the updated info and pass it to updateSchool
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
            // you can use inline styles like this, but you shouldn't
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '40%',
            }}
          >
            <input
              name='name'
              // value={what should this value be?}
              placeholder='Update School Name'
              onChange={this.handleTyping}
            ></input>
            <input
              name='address'
              // value={why do we even need a value attribute?}
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

export default connect()(EditSchool);
