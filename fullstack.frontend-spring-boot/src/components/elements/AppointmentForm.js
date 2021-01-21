import React, { Component } from "react";

class AppointmentForm extends Component {
  render() {
    let { appointmentData, journal } = this.props;
    console.log(appointmentData);
    return (
      <div className="card">
        <h2 className="text-center">Edit appointment</h2>

        <form>
          <div className="row">
            <div className="col">
              <label>Booking date</label>
              <input
                placeholder="Booking date"
                name="bookingDate"
                className="form-control"
                value=""
                onChange={this.onChange}
              />
            </div>
            <div className="col">
              <label>Booking time</label>
              <input
                placeholder="Booking time"
                name="bookingTime"
                className="form-control"
                value=""
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Patient name</label>
              <input
                placeholder="Patient Name"
                name="patientName"
                className="form-control"
                value=""
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Patient Feedback</label>
              <textarea
                disabled
                placeholder="Patient information"
                name="patientInformation"
                className="form-control"
                value=""
                onChange={this.onChange}
              />
            </div>
          </div>
          {/* Check if the doctor has clicked the "write journal" button and render this field if true*/}
          {journal ? (
            <div className="row">
              <div className="col">
                <label>Journal entry</label>
                <textarea
                  placeholder="Journal entry"
                  name="doctorInformation"
                  className="form-control"
                  value=""
                  onChange={this.onChange}
                />
              </div>
            </div>
          ) : null}

          <button className="btn btn-success">Save</button>
        </form>
      </div>
    );
  }
}
export default AppointmentForm;
