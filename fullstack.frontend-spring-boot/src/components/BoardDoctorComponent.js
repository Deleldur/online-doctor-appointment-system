import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import AuthService from "../service/AuthService";
const AppointmentHistory = (props) => (
  <div>
    <div className="card">
      <Link to="">Patient name</Link>
      <p>
        bookingdate: {props.appointments.appointmentDate} - bookingtime:{" "}
        {props.appointments.appointmentTime} - Treated ailment:{" "}
        {props.appointments.treatedAilment}
      </p>
      <p>Doctor feedback: {props.appointments.doctorFeedback}</p>
      <p>Patient feedback: {props.appointments.patientFeedback}</p>
    </div>
  </div>
);
export default class BoardDoctorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointmentHistory: []
    };
  }

  appointmentHistoryList = () => {
    return this.state.appointmentHistory.map((appointmentHistory, i) => {
      return <AppointmentHistory appointments={appointmentHistory} key={i} />;
    });
  };

  componentDidMount() {
    const doctorId = AuthService.getCurrentUserId();
    UserService.getDoctorAppointmentHistory(doctorId).then(
      (response) => {
        this.setState({
          appointmentHistory: response.data
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
      <div className="row">
        <div className="col-12">
          <header className="jumbotron">
            <h1>Appointment history</h1>
            {this.appointmentHistoryList()}
          </header>
        </div>
      </div>
    );
  }
}
