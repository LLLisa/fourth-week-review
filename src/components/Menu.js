import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Schools from './Schools';
import { getUsers } from '../store';
import { Logo } from '.';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      //set the default state to the data type it will be
      //THIS WILL SAVE YOUR LIFE as your projects get bigger
      selectedList: '',
      userList: [],
      schoolList: [],
    };
    this.selectList = this.selectList.bind(this);
    // this.getUsers = this.getUsers.bind(this);
    this.getSchools = this.getSchools.bind(this);
  }

  //this runs the first time a component renders
  //set pieces of state to their initial values
  componentDidMount() {
    this.setState({ selectedList: 'Users' });
    //getUsers is now on props instead of 'this'
    this.props.getUsers();
    this.getSchools();
  }

  //these fumctions are now in the store!
  // async getUsers() {
  //   const users = await axios.get('/users');
  //   this.setState({ userList: users.data });
  // }

  async getSchools() {
    const schools = await axios.get('/api/schools');
    this.setState({ schoolList: schools.data });
  }

  //this is an event handler that handles the 'onClick' event below
  selectList(ev) {
    this.setState({
      selectedList: window.location.toString().split('/').at(-1),
    });
  }

  render() {
    //destructuring selectedList because it is being used twice
    // console.log(this.props);
    const { selectedList, schoolList } = this.state;
    return (
      <>
        <Logo />
        <h1 id='header'>{selectedList}</h1>
        <nav id='nav'>
          <Link to='users'>Users</Link>
          <Link to='schools'>Schools</Link>
        </nav>
        <Outlet />
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
  };
};

export default connect(mapState, mapDispatch)(Menu);
