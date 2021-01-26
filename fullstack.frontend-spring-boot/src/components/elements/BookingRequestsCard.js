import React, { Component } from "react";

import UserService from "../../service/UserService";

class BookingRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientId: "",
      patientInformation: "",
      currentDate: this.props.currentDate,
      appointments: this.props.appointments,
      feedback: "Test",
      name: "Doctor",
      email: "msten75@gmail.com",
      reload: false
    };
  }

  refreshPage = () => {
    this.setState({ reload: true }, () => this.setState({ reload: false }));
  };
  handleSubmit = (appointmentInformation) => {
    const templateId = "template_dxz5cj6";

    this.sendFeedback(
      templateId,
      {
        message: this.state.feedback,
        from_name: this.state.name,
        reply_to: this.state.email,
        from_email: this.state.email
      },
      appointmentInformation
    );
  };
  sendFeedback = (templateId, variables, appointmentInformation) => {
    window.emailjs
      .send("service_q8gzh52", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        let feedback = {
          active: true,
          bookingDate: appointmentInformation.bookingDate,
          bookingStartTime: appointmentInformation.bookingStartTime,
          treatedAilment: appointmentInformation.treatedAilment
        };

        UserService.editAppointment(
          appointmentInformation.id,
          feedback
        ).then(() => window.location.reload());
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  approveBookingRequest = (appointmentInformation) => {
    let feedback = {
      active: true,
      bookingDate: appointmentInformation.bookingDate,
      bookingStartTime: appointmentInformation.bookingStartTime,
      treatedAilment: appointmentInformation.treatedAilment
    };

    UserService.editAppointment(appointmentInformation.id, feedback);
  };

  deleteAppointment = (e, id) => {
    UserService.deleteAppointment(id);
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
                  <input
                    type="submit"
                    value="Approve"
                    className="btn btn-success"
                    onClick={
                      () => this.handleSubmit(currentAppointments)
                      //this.approveBookingRequest(currentAppointments)
                    }
                  />

                  <input
                    type="submit"
                    value="Deny"
                    className="btn btn-danger"
                    onClick={(e) => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this appointment?"
                        )
                      )
                        this.deleteAppointment(e, currentAppointments.id);
                    }}
                  />
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
      <>
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
      </>
    );
  }
}

export default BookingRequests;
