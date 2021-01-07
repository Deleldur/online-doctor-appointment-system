import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/">
            <span className="logo">Online Doctor Appointment</span>
          </Link>
          <Link className="nav" to="/profile">
            Profile
          </Link>
          <Link className="nav" to="/create">
            Create Appointment
          </Link>
        </div>
      </header>
    );
  }
}

export default navigation;
