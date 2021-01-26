import React, { Component } from "react";
import UserService from "../service/UserService";

class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentData: {},
      patientInformation: [],
      id: this.props.match.params.id,
      doctorFeedback: "",
      patientFeedback: "",
      bookingStartTime: "",
      bookingDate: "",
      treatedAilment: "",
      patientId: "",
      journal: this.props.match.params.journal,
      patientFirstName: "",
      patientLastname: ""
    };
  }

  appointmentInformation = async () => {
    let { id } = this.state;

    await UserService.getAppointmentsFromId(id).then(
      (response) => {
        this.setState({
          id: response.data.id,
          patientId: response.data.patientInformation.patientId,
          patientFirstName: response.data.patientInformation.patientFirstName,
          patientLastName: response.data.patientInformation.patientLastName,
          patientFeedback: response.data.patientFeedback,
          doctorFeedback: response.data.doctorFeedback,
          bookingStartTime: response.data.bookingStartTime,
          bookingDate: response.data.bookingDate,
          treatedAilment: response.data.treatedAilment
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

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
      // doctorFeedback: e.target.value,
      // patientFeedback: e.target.value
    });
  };

  saveFeedback = (e) => {
    let { id } = this.state;
    e.preventDefault();
    let feedback = {
      patientFeedback: this.state.patientFeedback,
      doctorFeedback: this.state.doctorFeedback,
      bookingDate: this.state.bookingDate,
      bookingStartTime: this.state.bookingStartTime,
      treatedAilment: this.state.treatedAilment,
      active: true
    };
    UserService.editAppointment(id, feedback);
  };
  componentDidMount() {
    this.appointmentInformation();
    //    this.getPatientInfo();
  }

  render() {
    let {
      journal,
      patientFeedback,
      doctorFeedback,
      treatedAilment,
      patientFirstName,
      patientLastName
    } = this.state;

    return (
      <>
        <div className="card">
          <h2 className="text-center">
            {/* {journal === "feedback" ? "Leave feedback" : "Write Journal"} */}

            {journal === "feedback"
              ? "Leave Feedback"
              : journal === "edit"
              ? "Edit appointment"
              : "Write Journal Entry"}
          </h2>

          <form>
            <div className="row">
              <div className="col">
                <label>Booking date</label>
                <input
                  disabled
                  placeholder="Booking date"
                  name="bookingDate"
                  className="form-control"
                  value={this.state.bookingDate}
                  onChange={this.onChange}
                />
              </div>
              <div className="col">
                <label>Booking time</label>
                <input
                  disabled
                  placeholder="Booking time"
                  name="bookingTime"
                  className="form-control"
                  value={this.state.bookingStartTime}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Patient name</label>
                <input
                  disabled
                  placeholder="Patient Name"
                  name="patientName"
                  className="form-control"
                  value={patientFirstName + " " + patientLastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="col">
                <label>Ailment</label>
                <input
                  disabled
                  placeholder="Ailment"
                  name="ailment"
                  className="form-control"
                  value={treatedAilment !== null ? treatedAilment : ""}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className={journal === "feedback" ? "col patient" : "col"}>
                <label>Patient Feedback</label>
                {/* Patient entry is disabled for the doctor and enabled for the patient*/}
                {journal === "feedback" ? (
                  <textarea
                    placeholder="Patient feedback"
                    name="patientFeedback"
                    className="form-control"
                    value={patientFeedback !== null ? patientFeedback : ""}
                    onChange={this.onChange}
                  />
                ) : (
                  <textarea
                    disabled
                    placeholder="Patient feedback"
                    name="patientFeedback"
                    className="form-control"
                    value={patientFeedback !== null ? patientFeedback : ""}
                    onChange={this.onChange}
                  />
                )}
              </div>
            </div>
            {/* Journal entry is disabled for the patient and enabled for the doctor*/}
            <div className="row">
              <div className={journal === "feedback" ? "col" : "col doctor"}>
                <label>Doctors journal entry</label>
                {journal === "feedback" ? (
                  <textarea
                    disabled
                    placeholder="Journal entry"
                    name="doctorFeedback"
                    className="form-control"
                    value={doctorFeedback !== null ? doctorFeedback : ""}
                    onChange={this.onChange}
                  />
                ) : (
                  <textarea
                    placeholder="Journal entry"
                    name="doctorFeedback"
                    className="form-control"
                    value={doctorFeedback !== null ? doctorFeedback : ""}
                    onChange={this.onChange}
                  />
                )}
              </div>
            </div>

            <button onClick={this.saveFeedback} className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AppointmentComponent;
