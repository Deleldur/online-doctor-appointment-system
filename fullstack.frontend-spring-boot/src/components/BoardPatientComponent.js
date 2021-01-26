import React, { Component } from "react";

import UserService from "../service/UserService";

export default class BoardPatientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPatientBoard().then(
      (response) => {
        this.setState({
          content: response.data
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <>
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </>
    );
  }
}
