import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// CSS styles
import "../sass/main.scss";
import Header from "../common/Header";

import DoctorsList from "./DoctorsList";
import EditCategory from "../components/EditCategory";
import CreateAppointment from "../components/CreateAppointment";
export default class componentName extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <h2>TEST</h2>
          <Route path="/" exact component={DoctorsList} />
          <Route path="/edit-category/:id" component={EditCategory} />
          <Route path="/create" component={CreateAppointment} />
        </div>
      </Router>
    );
  }
}

/*
CategoriesList = Todoslist
EditCategory = edit-todo
CreateCategory = Create-todo
*/
