import React, { Component } from "react";
import { Link } from "react-router-dom";

//This is for the edit or cancel buttons on the current appointments
class CurrentAppointmentsPatientCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientId: "",
      patientInformation: "",
      currentDate: this.props.currentDate,

      appointments: this.props.appointments
    };
  }

  currentAppointmentList = () => {
    let { appointments } = this.props;
    let { currentDate } = this.state;

    // Sorts the array by date
    return appointments
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
              <tr key={i}>
                <td>{currentAppointments.bookingDate}</td>
                <td>{currentAppointments.bookingStartTime}</td>
                <td>
                  {currentAppointments.doctorInformation.doctorFirstName}{" "}
                  {currentAppointments.doctorInformation.doctorLastName}
                </td>
                <td>
                  <Link to={"/appointment/feedback/" + currentAppointments.id}>
                    <button className="btn btn-success">
                      <span>Edit</span>
                    </button>
                  </Link>
                  <Link to="/appointment/">
                    <button className="btn btn-danger">
                      <span>Cancel</span>
                    </button>
                  </Link>
                </td>
              </tr>
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor name</th>
              <th>Edit / Cancel appointment</th>
            </tr>
          </thead>

          <tbody>{this.currentAppointmentList()}</tbody>
        </table>
      </div>
    );
  }
}

export default CurrentAppointmentsPatientCard;
