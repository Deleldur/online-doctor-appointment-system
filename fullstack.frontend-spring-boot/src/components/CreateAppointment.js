import React, { Component } from "react";
import axios from "axios";
import UserService from "../service/UserService";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      doctorId: "5ffeeee09407e72bb837a737",
      patientId: "abc",
      active: true
    };
  }

  onChangeBookingTime = (e) => {
    this.setState({
      bookingStartTime: e.target.value
    });
  };

  onChangeBookingDate = (e) => {
    this.setState({
      bookingDate: e.target.value
    });
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    UserService.getPatientInfo().then((response) => {
      this.setState({
        patientId: response.data.id
      });
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(`Form Submitted`);

    console.log(`Time ${this.state.bookingStartTime}`);
    console.log(`Date ${this.state.bookingDate}`);

    const newAppointment = {
      bookingStartTime: this.state.bookingStartTime,
      bookingEndTime: this.state.bookingEndTime,
      bookingDate: this.state.bookingDate,
      doctorId: this.state.doctorId,
      patientId: this.state.patientId,
      active: this.state.active
    };

    axios.post("http://localhost:3000/api/appointment/create/", newAppointment);
    this.setState({
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      doctorId: "5ffeeee09407e72bb837a737",
      patientId: "",
      active: true
    });
  };

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
              value={this.state.bookingStartTime}
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
