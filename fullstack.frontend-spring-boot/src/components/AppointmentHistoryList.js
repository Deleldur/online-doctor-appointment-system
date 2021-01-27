import React, { Component } from "react";

class AppointmentHistoryList extends Component {
  constructor(props) {
    super(props);
  }

  appointmentHistoryList = () => {
    let { appointmentHistory } = this.props;
    return appointmentHistory.map((history, i) => {
      return (
        <>
          <p>
            Patient name:
            {history.patientInformation.patientFirstName +
              " " +
              history.patientInformation.patientLastName}{" "}
          </p>

          <p>
            bookingdate: {history.bookingDate} - bookingtime:{" "}
            {history.bookingStartTime} - Treated ailment:{" "}
            {history.treatedAilment}
          </p>
          <p>Doctor feedback: {history.doctorFeedback}</p>
          <p>Patient feedback: {history.patientFeedback}</p>
          <hr className="solid-divider" />
        </>
      );
    });
  };
  render() {
    return <div>{this.appointmentHistoryList()}</div>;
  }
}

export default AppointmentHistoryList;
