import React, { Component } from "react";
import { CSVLink, CSVDownload } from "react-csv";

class AppointmentHistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tempArray: []
    };
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
    let { data, tempArray } = this.state;
    tempArray = [
      [
        "Patient firstName",
        "Patient lastName",
        "Date",
        "Time",
        "Treated ailment",
        "Phone",
        "Email",
        "Doctor journal",
        "Patient feedback"
      ]
    ];
    this.props.appointmentHistory.map((array, i) => {
      tempArray.push([
        array.patientInformation.patientFirstName,
        array.patientInformation.patientLastName,
        array.bookingDate,
        array.bookingStartTime,
        array.treatedAilment,
        array.patientInformation.patientPhone,
        array.patientInformation.patientEmail,
        array.doctorFeedback,
        array.patientFeedback
      ]);
    });

    // const headers = [
    //   { label: "Patient firstName", key: "patientFirstName" },
    //   { label: "Patient lastName", key: "patientLastName" },
    //   { label: "Date", key: "bookingDate" },
    //   { label: "Time", key: "bookingStartTime" },
    //   { label: "Treated ailment", key: "treatedAilment" },
    //   { label: "Phone", key: "patientPhone" },
    //   { label: "Email", key: "patientEmail" },
    //   { label: "Doctor journal", key: "doctorFeedback" },
    //   { label: "Patient feedback", key: "patientFeedback" }
    // ];
    return (
      <>
        <div>{this.appointmentHistoryList()}</div>;
        <CSVLink data={tempArray}>Download Summary</CSVLink>;
      </>
    );
  }
}

export default AppointmentHistoryList;
