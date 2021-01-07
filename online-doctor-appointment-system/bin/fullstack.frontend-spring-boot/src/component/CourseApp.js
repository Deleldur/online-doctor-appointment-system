import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CoursesList from "./CoursesList";
import CourseUpdate from "./CourseUpdate";

class CourseApp extends Component {
  render() {
    return (
      <Router>
        <h1>Doctor App</h1>
        <Switch>
          <Route path="/" exact component={CoursesList}/>
        </Switch>
      </Router>
    );
  }
}

export default CourseApp;
