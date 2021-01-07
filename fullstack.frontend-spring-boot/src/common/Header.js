import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class Header extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header  className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/">
                <span className="logo">Online Doctor Appointment</span>
          </Link>
          <Link className="nav" to="/profile">
            Profile
          </Link>
          <Link className="nav" to="/create">
            Create Appointment
          </Link>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)