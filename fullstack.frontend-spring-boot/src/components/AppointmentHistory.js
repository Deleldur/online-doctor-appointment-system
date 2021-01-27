import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppointmentHistoryList from "./AppointmentHistoryList";
import UserService from "../service/UserService";
import AuthService from "../service/AuthService";

export default class BoardDoctorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointmentHistory: []
    };
  }

  getDoctorAppointmentList = () => {
    const doctorId = AuthService.getCurrentUserId();
    const journalHistory = true;
    UserService.getDoctorAppointmentHistory(doctorId, journalHistory).then(
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
  };
  componentDidMount() {
    this.getDoctorAppointmentList();
  }

  render() {
    let { appointmentHistory } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="card">
            <h2>Appointment History</h2>
            <AppointmentHistoryList
              appointmentHistory={appointmentHistory}
              // currentDate={currentDate}
            />
          </div>
        </div>
      </div>
    );
  }
}
