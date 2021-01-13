import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import AuthService from "./service/AuthService";

import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import Home from "./components/HomeComponent";
// import Profile from "./components/ProfileComponent";
import BoardDoctorComponent from "./components/BoardDoctorComponent";
import BoardPatientComponent from "./components/BoardPatientComponent";
import EditUserComponent from "./components/EditUserComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showDoctorBoard: false,
      showPatientBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showPatientBoard: user.roles.includes("ROLE_PATIENT"),
        //showPatientBoard: user.roles.includes("ROLE_DOCTOR", "ROLE_PATIENT"), // Only for dev purposes
        showDoctorBoard: user.roles.includes("ROLE_DOCTOR")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showPatientBoard, showDoctorBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Doctor booking
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            {showPatientBoard && (
              <li className="nav-item">
                <Link to={"/patient"} className="nav-link">
                  Patient Board
                </Link>
              </li>
            )}
            {showDoctorBoard && (
              <li className="nav-item">
                <Link to={"/doctor"} className="nav-link">
                  Doctor Board
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container container-bg">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/register" component={RegisterComponent} />
            <Route exact path="/profile" component={EditUserComponent} />
            <Route path="/patient" component={BoardPatientComponent} />
            <Route
              path="/doctor"
              component={BoardDoctorComponent}
              loggedIn={showDoctorBoard}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
