import React, { Component } from "react";
//import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import AuthService from "../service/AuthService";
import CurrentAppointments from "./elements/CurrentAppointments";
import FinishedAppointments from "./elements/FinishedAppointments";
import BookingRequests from "./elements/BookingRequests";
import format from "date-fns/format";


// component render for the current appointments

// component render for the booking requests

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: "",
      appointments: [],
      currentDate: format(new Date(), "yyyy-MM-dd")
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

  finishedAppointmentList = () => {
    let { currentDate } = this.state;

    //      console.log(format(new Date(), "yyyy-MM-dd"));
    //console.log(parse(toDate(currentDate), "yyyy-MM-dd", new Date()));
    return this.state.appointments.map((currentAppointments, i) => {
      // Renders the appointment list based on the active boolean
      // Active = current active appointments
      // else is not yet confirmed booking requests
      if (currentAppointments.active === true) {
        if (currentAppointments.bookingDate < currentDate) {
          return (
            <FinishedAppointments appointments={currentAppointments} key={i} />
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  };

  currentAppointmentList = () => {
    let { currentDate } = this.state;

    //      console.log(format(new Date(), "yyyy-MM-dd"));
    //console.log(parse(toDate(currentDate), "yyyy-MM-dd", new Date()));
    // Sorts the array by date
    return this.state.appointments
      .sort(function compare(a, b) {
        let dateA = new Date(a.bookingDate);
        let dateB = new Date(b.bookingDate);
        return dateA - dateB;
      })
      .map((currentAppointments, i) => {
        // Renders the appointment list based on the active boolean
        // Active = current active appointments
        // else is not yet confirmed booking requests
        if (currentAppointments.active === true) {
          if (currentAppointments.bookingDate >= currentDate) {
            return (
              <CurrentAppointments appointments={currentAppointments} key={i} />
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      });
  };

  // Gets an array of all appointsments in the database for the currently logged in doctor.
  getAllAppointments = () => {
    const doctorId = AuthService.getCurrentUserId();

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
  };

  componentDidMount() {
    this.getAllAppointments();
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <header className="jumbotron">
            <h1>Doctor page</h1>
          </header> 
          <h2>Booking requests</h2>
          <div className="card">
           
            {this.currentBookingRequests()}
          </div>
          <div className="card">
            <h2>Current appointments</h2>
            {this.currentAppointmentList()}
          </div>
          <div className="card">
            <h2>Finished appointments</h2>
            {this.finishedAppointmentList()}
          </div>
          <div className="card">
            <h2>Email</h2>
          
          </div>
        </div>
      </div>
    );
  }
}
