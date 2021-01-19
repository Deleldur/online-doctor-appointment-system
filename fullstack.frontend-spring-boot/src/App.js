import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import AuthService from "./service/AuthService";

import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
//import Home from "./components/HomeComponent";
import HomeDoctor from "./components/HomeDoctor";
import HomePatient from "./components/HomePatient";
// import Profile from "./components/ProfileComponent";
import BoardDoctorComponent from "./components/BoardDoctorComponent";
//import BoardPatientComponent from "./components/BoardPatientComponent";
import EditUserComponent from "./components/EditUserComponent";
import CreateAppointment from "./components/CreateAppointment";

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
    // imports the userinformation based on the logged in user.
    const user = AuthService.getCurrentUser();

    if (user) {
      // Show information based on the role of the logged in user and sets
      // it in a variable to show relevant information depending on the logged in user
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

          <h4 className="Doctor booking">
            Doctor booking
          </h4>

          
          <div className="navbar-nav mr-auto">

           

            {showPatientBoard && (
               <div className="navbar-nav mr-auto">
               <li className="nav-item">
               <Link to={"/home"} className="nav-link">
                Home
               </Link>
               </li>

              <li className="nav-item">
                <Link to={"/createappointment"} className="nav-link">
                  Create appointments
                </Link>
              </li>
              </div>
            )}

            {showDoctorBoard && (
                  <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                   Home
                  </Link>
                  </li>
              
              <li className="nav-item">
                <Link to={"/doctor"} className="nav-link">
                  Appointment History
                </Link>
              </li>
              </div>
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
                  Logout
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
            {showDoctorBoard && (
              <Route exact path={["/", "/home"]} component={HomeDoctor} />
            )}
            {showPatientBoard && (
              <Route exact path={["/", "/home"]} component={HomePatient} />
            )}
            <Route exact path="/login" component={LoginComponent} />
            <Route exact path="/register" component={RegisterComponent} />
            <Route exact path="/profile" component={EditUserComponent} />
            <Route path="/createappointment" component={CreateAppointment} />
            <Route path="/doctor" component={BoardDoctorComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

