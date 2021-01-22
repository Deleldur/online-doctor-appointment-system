import React, { Component } from "react";
import UserService from "../service/UserService";
import AppointmentForm from "./elements/AppointmentForm";


class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentData: [],
      id: this.props.match.params.id
    };
  }

  appointmentInformation = () => {
    let { id } = this.state;

    UserService.getAppointmentsFromId(id).then(
      (response) => {
        this.setState({
          appointmentData: response.data
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
  };

  componentDidMount() {
    this.appointmentInformation();
  }

  render() {
    let { appointmentData } = this.state;

    return (
      <>
        <AppointmentForm
          appointmentData={appointmentData}
          journal={this.props.match.params.journal}
        />
      </>
    );
  }
}

export default AppointmentComponent;
