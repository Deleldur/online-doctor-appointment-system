import React, { Component } from "react";
import UserService from "../../service/UserService";
class AppointmentForm extends Component {
  state = {
    appointmentInformation: {},
    appointmentId: this.props.id,
    appointmentData: this.props.appointmentData,
    patientFeedback: "",
    bookingDate: this.props.appointmentData.bookingDate,
    bookingStartTime: this.props.appointmentData.bookingStartTime,
    doctorFeedbackinfo: this.props.appointmentData.doctorFeedback
  };

  onChange = (e) => this.setState({ doctorFeedbackinfo: e.target.value });
  componentDidMount() {
    // fetch the project name, once it retrieves resolve the promsie and update the state.
  }
  saveFeedback = (e) => {
    let { appointmentId } = this.state;
    e.preventDefault();
    let feedback = {
      bookingDate: this.state.bookingDate,
      bookingStartTime: this.state.bookingStartTime,
      patientFeedback: this.state.patientFeedback,
      doctorFeedbackinfo: this.state.doctorFeedbackinfo
    };

    UserService.editAppointment(appointmentId, feedback);
    //.then((res) => console.log(res.data));
  };

  render() {
    let { journal } = this.props;
    let { appointmentInformation, doctorFeedbackInfo } = this.state;
    console.log("feedback info: " + doctorFeedbackInfo);
    return (
      <div className="card">
        <h2 className="text-center">Edit appointment</h2>

        <form>
          <div className="row">
            <div className="col">
              <label>Booking date</label>
              <input
                disabled
                placeholder="Booking date"
                name="bookingDate"
                className="form-control"
                value={this.props.appointmentData.bookingDate}
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
                value={this.props.appointmentData.bookingStartTime}
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
                value={
                  this.props.patientName.firstName +
                  " " +
                  this.props.patientName.lastName
                }
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Patient Feedback</label>
              {/* Patient entry is disabled for the doctor and enabled for the patient*/}
              {journal === "feedback" ? (
                <textarea
                  placeholder="Patient information"
                  name="patientInformation"
                  className="form-control"
                  value={this.props.appointmentData.patientFeedback}
                  onChange={this.onChange}
                />
              ) : (
                <textarea
                  disabled
                  placeholder="Patient information"
                  name="patientInformation"
                  className="form-control"
                  value={this.props.appointmentData.patientFeedback}
                  onChange={this.onChange}
                />
              )}
            </div>
          </div>
          {/* Journal entry is disabled for the patient and enabled for the doctor*/}
          <div className="row">
            <div className="col">
              <label>Doctors journal entry</label>
              {journal === "feedback" ? (
                <textarea
                  disabled
                  placeholder="Journal entry"
                  name="doctorFeedbackinfo"
                  className="form-control"
                  value={this.props.appointmentData.doctorFeedback}
                  onChange={this.onChange}
                />
              ) : (
                <textarea
                  placeholder="Journal entry"
                  name="doctorFeedbackinfo"
                  className="form-control"
                  value={this.props.appointmentData.doctorFeedback}
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
    );
  }
}
export default AppointmentForm;
