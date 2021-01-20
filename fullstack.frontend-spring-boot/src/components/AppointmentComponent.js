import React, { Component } from "react";

class AppointmentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: [],
      id: this.props.match.params.id
    };
  }

  appointmentMap = () => {
    let { appointment } = this.state;
    appointment.map((currentAppointments, i) => {
      return <p>{currentAppointments.id}</p>;
    });
  };

  render() {
    let { id } = this.state;

    console.log("inside component" + id);
    return (
      <>
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
                  value={id}
                  onChange={this.onChange}
                />
              </div>
              <div className="col">
                <label>Booking time</label>
                <input
                  placeholder="Booking time"
                  name="bookingTime"
                  className="form-control"
                  value={this.state.lastName}
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
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Patient comments</label>
                <textarea
                  placeholder="Patient information"
                  name="patientInformation"
                  className="form-control"
                  value={this.state.streetAddress}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <button className="btn btn-success">Save</button>
          </form>
        </div>
      </>
    );
  }
}

export default AppointmentComponent;
