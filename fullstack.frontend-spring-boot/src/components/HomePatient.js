import React, { Component } from "react";

import UserService from "../service/UserService";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then((response) => {
      this.setState({
        content: response.data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h1>Patient Home</h1>
        </header>
      </div>
    );
  }
}
