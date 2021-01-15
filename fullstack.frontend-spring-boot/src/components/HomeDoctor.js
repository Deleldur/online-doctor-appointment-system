import React, { Component } from "react";
//import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import AuthService from "../service/AuthService";

// component render for the current appointments
const CurrentAppointments = (props) => (
  <div>
    <p>
      bookingdate: {props.appointments.bookingDate} - booking start time:{" "}
      {props.appointments.bookingStartTime} - booking end time{" "}
      {props.appointments.bookingEndTime}
    </p>
  </div>
);
// component render for the booking requests
const BookingRequests = (props) => (
  <div>
    <p>
      bookingdate: {props.appointments.bookingDate} - booking start time:{" "}
      {props.appointments.bookingStartTime} - booking end time{" "}
      {props.appointments.bookingEndTime}
    </p>
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

  currentBookingRequests = () => {
    return this.state.appointments.map((currentAppointments, i) => {
      // Renders the appointment list based on the active boolean
      // Active = current active appointments
      // else is not yet confirmed booking requests
      if (currentAppointments.active === false) {
        return <BookingRequests appointments={currentAppointments} key={i} />;
      } else {
        return null;
      }
    });
  };

  currentAppointmentList = () => {
    return this.state.appointments.map((currentAppointments, i) => {
      // Renders the appointment list based on the active boolean
      // Active = current active appointments
      // else is not yet confirmed booking requests
      if (currentAppointments.active === true) {
        return (
          <CurrentAppointments appointments={currentAppointments} key={i} />
        );
      } else {
        return null;
      }
    });
  };

  componentDidMount() {
    // imports the id from the logged in user
    const doctorId = AuthService.getCurrentUserId();
    console.log(doctorId);
    // fetches all appointments from mongodb based on the logged in doctors ID
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
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <header className="jumbotron">
            <h1>Doctor page</h1>
          </header>

          <h2>Booking requests</h2>
          {this.currentBookingRequests()}

          <h2>Upcoming appointments</h2>
          {this.currentAppointmentList()}

          <h2>Finished appointments</h2>
          <p>
            All appointments that are done that the doctor has to write a
            "journal" on. Then it should transfer to the appointment history and
            be considered done.
          </p>
        </div>
      </div>
    );
  }
}
