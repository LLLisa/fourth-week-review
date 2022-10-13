import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import Schools from './Schools';
import { getUsers, getSchools } from '../store';
import { Homeboi } from '.';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      //set the default state to the data type it will be
      //THIS WILL SAVE YOUR LIFE as your projects get bigger
      selectedList: '',
      // userList: [],
      // schoolList: [],
    };
    this.selectList = this.selectList.bind(this);
    this.resetListDisplay = this.resetListDisplay.bind(this);
    // this.getUsers = this.getUsers.bind(this);
    // this.getSchools = this.getSchools.bind(this);
  }

  //this runs the first time a component renders
  //set pieces of state to their initial values
  componentDidMount() {
    this.resetListDisplay();
    //getUsers is now on props instead of 'this'
    this.props.getUsers();
    this.props.getSchools();
  }

  //these fumctions are now in the store!
  // async getUsers() {
  //   const users = await axios.get('/users');
  //   this.setState({ userList: users.data });
  // }

  // async getSchools() {
  //   const schools = await axios.get('/api/schools');
  //   this.setState({ schoolList: schools.data });
  // }

  //this is an event handler that handles the 'onClick' event below
  selectList() {
    this.setState({
      selectedList: window.location.toString().split('/').at(-1),
    });
  }

  resetListDisplay() {
    this.setState({ selectedList: 'Make a Selection' });
  }

  render() {
    return (
      <>
        <figure onClick={this.resetListDisplay}>
          <Homeboi />
        </figure>
        <header>
          <h1 id='selected-list'>{this.state.selectedList}</h1>
          <nav id='nav' onClick={this.selectList}>
            <Link to='users'>Users</Link>
            <Link to='schools'>Schools</Link>
          </nav>
        </header>
        <section>
          <Outlet />
        </section>
      </>
    );
  }
}

const mapState = (state) => {
  return { userList: state.users };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getSchools: () => dispatch(getSchools()),
  };
};

export default connect(mapState, mapDispatch)(Menu);
