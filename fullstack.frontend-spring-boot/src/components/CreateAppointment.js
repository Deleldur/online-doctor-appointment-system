import React, { Component } from "react";
import axios from "axios";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingTime: "",
      bookingDate: "",
      doctorId: "123avaer341xc",
      patientId: "abc34123fvdf343",
      active: true
    };
  }

  onChangeBookingTime = (e) => {
    this.setState({
      bookingTime: e.target.value
    });
  };

  onChangeBookingDate = (e) => {
    this.setState({
      bookingDate: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(`Form Submitted`);
    
    console.log(`Time ${this.state.bookingTime}`);
    console.log(`Date ${this.state.bookingDate}`); 

    const newAppointment = {
      bookingTime: this.state.bookingTime,
      bookingDate: this.state.bookingDate,
      doctorId: this.state.doctorId,
      patientId: this.state.patientId,
      active: this.state.active
    };
    
    axios
      .post("http://localhost:3000/appointment/create/", newAppointment);
    this.setState({
      bookingTime: "",
      bookingDate: "",
      doctorId: "123avaer341xc",
      patientId: "abc34123fvdf343",
      active: true
    });
  };
/*
    {
        "doctorId": "1412f123",
        "patientId": "f1231244512",
        "active": true,
        "bookingDate": "2021-04-12",
        "bookingTime": "16:30"
    }
  */
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Appointment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="col-12">
            <label>Date</label>
            <input
              type="date"
              className="col-12"
              value={this.state.bookingDate}
              onChange={this.onChangeBookingDate}
              // categoryTitle -> bookingDate
              // onChangeCategoryTitle - onChangeBookingDate

            />
          </div>
          <div className="col-12">
            <label>Time</label>
            <input
              type="time"
              className="col-12"
              value={this.state.bookingTime}
              onChange={this.onChangeBookingTime}
              // categoryDescription -> bookingTime
              // onChangeCategoryDescription -> onChangeBookingTime
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Create appointment" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}
