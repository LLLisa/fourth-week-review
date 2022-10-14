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
  }

  //async/await here?
  async handleTyping(ev) {
    await this.setState({ [ev.target.name]: ev.target.value });
  }

  handleSubmit(ev) {
    console.log('//todo: handle this submit');
  }

  render() {
    const { name, address } = this.state;
    return (
      <>
        {/* semantic html is cool and fun */}
        <label htmlFor='add-school'>Create a New School:</label>
        <form name='add-school'>
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
              placeholder='Name of School'
              onChange={this.handleTyping}
            ></input>
            <input
              name='address'
              // value={why do we even need a value attribute?}
              placeholder='Address of School'
              onChange={this.handleTyping}
            ></input>
          </section>
          <button
            onClick={() =>
              console.log(
                'the submit buttone has been clicked, but nothing happened'
              )
            }
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(null, mapDispatch)(AddSchool);
