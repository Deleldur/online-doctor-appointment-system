import React, { Component } from "react";
import axios from "axios";
import UserService from "../service/UserService";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorLocationlist: [],
      ailmentList: [],
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      doctorId: "5ffef47b9407e72bb837a73f",
      patientId: "",
      active: false
    };
  }
  componentDidMount() {
    this.loadUser();
    this.getAilments();
    this.getDoctorLocations();
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

  loadUser = () => {
    UserService.getPatientInfo().then((response) => {
      this.setState({
        patientId: response.data.id
      });
    });
  };

  getDoctorLocations = () => {
    UserService.getDoctorLocations().then((res) => {
      this.setState({
        doctorLocationlist: res.data
      });
    });
  };
  getAilments = () => {
    UserService.getAilmentList().then((response) => {
      this.setState({
        ailmentList: response.data
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
      doctorId: "5ffef47b9407e72bb837a73f",
      patientId: "",
      active: false
    });
  };

  // Create "alert" for user if something went wrong

  render() {
    let { doctorLocationlist, ailmentList } = this.state;

    let result2 = doctorLocationlist.map((result) => result.address.city);
    const obj = [
      ...new Map(result2.map((item) => [JSON.stringify(item), item])).values()
    ];

    // Remove duplicates from the ailmentList to print in the dropdown menu on the page
    let result = ailmentList.map((result) => result.ailmentList);
    const obj2 = [
      ...new Map(
        result.flat().map((item) => [JSON.stringify(item), item])
      ).values()
    ];

    return (
      <div>
        <div className="row">
          <form>
            <div className="col-lg-12">
              <div className="form-group">
                <h3>Search for doctor</h3>

                <label>Choose a location:</label>
                <select className="form-control" id="ailments" name="ailments">
                  {obj.sort().map((list, key) => {
                    return (
                      <option value={list} key={key}>
                        {list}
                      </option>
                    );
                  })}
                </select>
                <label>Choose an ailment:</label>
                <select className="form-control" id="ailments" name="ailments">
                  {obj2.sort().map((list, key) => {
                    return (
                      <option value={list} key={key}>
                        {list}
                      </option>
                    );
                  })}
                </select>
              </div>

              <input type="submit" value="Search" className="btn" />
            </div>
          </form>
        </div>
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="col-lg-12">
              <h3>Create New Appointment</h3>
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

            <input type="submit" value="Create appointment" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}
