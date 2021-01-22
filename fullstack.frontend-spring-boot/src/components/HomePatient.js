import React, { Component } from "react";

import UserService from "../service/UserService";
import AuthService from "../service/AuthService";
import FinishedAppointmentsPatient from "./elements/FinishedAppointmentsPatient";
import format from "date-fns/format";
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
      appointments: [],
      currentDate: format(new Date(), "yyyy-MM-dd")
    };
  }

  appointmentHistoryList = () => {
    return this.state.appointments.map((appointmentHistory, i) => {
      return (
        <CurrentAppointments patAppointments={appointmentHistory} key={i} />
      );
    });
  };
  getAllAppointments = () => {
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
              <CurrentAppointments
                patAppointments={currentAppointments}
                key={i}
              />
            );
          } else {
            return null;
          }
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
            <FinishedAppointmentsPatient
              appointments={currentAppointments}
              key={i}
            />
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  };

  componentDidMount() {
    this.getAllAppointments();
  }

  render() {
    let { appointments } = this.state;
    console.log(appointments);
    return (
      <div className="container">
        <div className="card">
          <h3>Upcoming appointments</h3>
          {this.currentAppointmentList()}
        </div>
        <div className="card">
          <h3>Finished appointments</h3>
          {this.finishedAppointmentList()}
        </div>
      </div>
    );
  }
}
