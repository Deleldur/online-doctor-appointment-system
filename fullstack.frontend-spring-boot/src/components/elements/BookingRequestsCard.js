import React, { Component } from "react";

import UserService from "../../service/UserService";

class BookingRequests extends Component {
  //------------------------- check this out later
  constructor(props) {
    super(props);

    this.state = {
      patientId: "",
      patientInformation: "",
      currentDate: this.props.currentDate,
      appointments: this.props.appointments,
      temp: false
    };
  }
  //-------------------------

  approveBookingRequest = (appointmentInformation) => {
    let feedback = {
      active: true,
      bookingDate: appointmentInformation.bookingDate,
      bookingStartTime: appointmentInformation.bookingStartTime,
      treatedAilment: appointmentInformation.treatedAilment
    };

    UserService.editAppointment(appointmentInformation.id, feedback);
  };

  bookingRequestList = () => {
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

        if (currentAppointments.active === false) {
          if (currentAppointments.bookingDate > currentDate) {
            return (
              <tr key={i}>
                <td>{currentAppointments.bookingDate}</td>
                <td>{currentAppointments.bookingStartTime}</td>
                <td>
                  {currentAppointments.patientInformation.patientFirstName}{" "}
                  {currentAppointments.patientInformation.patientLastName}
                </td>
                <td>
                  <form>
                    <input
                      type="submit"
                      value="Approve"
                      className="btn btn-success"
                      onClick={() =>
                        this.approveBookingRequest(currentAppointments)
                      }
                    />
                    <input
                      type="submit"
                      value="Deny"
                      className="btn btn-danger"
                    />
                  </form>
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
              <th>Patient name</th>
              <th>Approve / Deny appointment</th>
            </tr>
          </thead>

          <tbody>{this.bookingRequestList()}</tbody>
        </table>
      </div>
    );
  }
}

export default BookingRequests;
