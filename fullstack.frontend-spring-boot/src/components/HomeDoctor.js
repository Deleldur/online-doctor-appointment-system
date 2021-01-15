import React, { Component } from "react";
//import { Link } from "react-router-dom";
import UserService from "../service/UserService";

const Appointments = (props) => (
  <div>
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
      return <Appointments appointments={currentAppointments} key={i} />;
    });
  };

  componentDidMount() {
    UserService.getAppointments().then(
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
          <header className="jumbotron">
            <h2>Booking requests</h2>
            {this.appointmentList()}
            <h2>Upcoming appointments</h2>
          </header>
        </div>
      </div>
    );
  }
}
