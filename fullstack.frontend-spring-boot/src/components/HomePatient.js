import React, { Component } from "react";

import UserService from "../service/UserService";
import AuthService from "../service/AuthService";

const CurrentAppointments = (props) => (
  <div>
    <div>
      bookingdate: {props.patAppointments.bookingDate} - booking start time:{" "}
      {props.patAppointments.bookingStartTime} - booking end time{" "}
      {props.patAppointments.bookingEndTime}
    </div>
  </div>
);

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: []
    };
  }

  appointmentHistoryList = () => {
    return this.state.appointments.map((appointmentHistory, i) => {
      return (
        <CurrentAppointments patAppointments={appointmentHistory} key={i} />
      );
    });
  };

  componentDidMount() {
    const patientId = AuthService.getCurrentUserId();
    UserService.getAppointmentsFromPatientId(patientId).then(
      (response) => {
        this.setState({
          appointments: response.data
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
    let { appointments } = this.state;
    console.log(appointments);
    return (
      <div className="container">
        <header className="jumbotron">
          <h1>Patient Home</h1>
        </header>

        <h2>Upcoming bookings</h2>
        {this.appointmentHistoryList()}
      </div>
    );
  }
}
