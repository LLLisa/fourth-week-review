import React from 'react';
import { connect } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getUsers, getSchools } from '../store';
import { Homeboi } from '.';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      //set the default state to the data type it will be
      //THIS WILL SAVE YOUR LIFE as your projects get bigger
      selectedList: '',
    };
    this.selectList = this.selectList.bind(this);
    this.resetListDisplay = this.resetListDisplay.bind(this);
  }

  //this runs AFTER the first render and before the second
  componentDidMount() {
    this.resetListDisplay();
    this.props.getUsers();
    this.props.getSchools();
  }

  selectList() {
    this.setState({
      //this is probably the worst way to achieve this goal, but it works
      selectedList: window.location.toString().split('/').at(-1),
    });
  }

  resetListDisplay() {
    this.setState({ selectedList: 'Make a Selection' });
  }

  render() {
    return (
      <>
        <div>click the homeboi to go home &#8595;</div>
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
