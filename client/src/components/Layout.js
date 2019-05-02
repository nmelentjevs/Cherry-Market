import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';

const socketUrl = 'localhost:5000';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      console.log('Connected');
    });
    this.setState({ socket });
  };

  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED);
    this.setState({ user });
  };

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { title } = this.props;
    return <div className="container">{title}</div>;
  }
}

export default Layout;
