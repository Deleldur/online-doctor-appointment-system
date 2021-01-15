import React, { Component } from "react";
//import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import AuthService from "../service/AuthService";
const CurrentAppointments = (props) => (
  <div>
    <h2>Upcoming appointments</h2>
    <div>
      bookingdate: {props.appointments.bookingDate} - booking start time:{" "}
      {props.appointments.bookingStartTime} - booking end time{" "}
      {props.appointments.bookingEndTime}
    </div>
  </div>
);

const BookingRequests = (props) => (
  <div>
    <h2>Booking requests</h2>
    <div>
      bookingdate: {props.appointments.bookingDate} - booking start time:{" "}
      {props.appointments.bookingStartTime} - booking end time{" "}
      {props.appointments.bookingEndTime}
    </div>
  </div>
);

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: "",
      appointments: []
    };
  }

  appointmentList = () => {
    return this.state.appointments.map((currentAppointments, i) => {
      if (currentAppointments.active === true) {
        return (
          <CurrentAppointments appointments={currentAppointments} key={i} />
        );
      } else {
        return <BookingRequests appointments={currentAppointments} key={i} />;
      }
    });
  };

  componentDidMount() {
    const doctorId = AuthService.getCurrentUserId();
    console.log(doctorId);
    UserService.getAppointmentsFromDoctorId(doctorId).then(
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
    UserService.getDoctorInfo().then(
      (response) => {
        this.setState({
          doctors: response.data
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
          <header className="jumbotron">{this.appointmentList()}</header>
        </div>
      </div>
    );
  }
}
