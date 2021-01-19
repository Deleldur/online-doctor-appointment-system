import React, { Component } from "react";
import axios from "axios";
import UserService from "../service/UserService";
import SearchForm from "./SearchForm";
import SearchDoctorResult from "./SearchDoctorResult";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorLocationlist: [],
      ailmentList: [],
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      doctorId: "5ffeeee09407e72bb837a737",
      patientId: "",
      active: false,
      dropDownLocation: "",
      ailmentsDropDownValue: "",
      value: "",
      finalDoctorList: ""
    };
  }
  componentDidMount() {
    this.loadUser();

    this.getDoctorLocations();
  }

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
  getAilments = (res) => {
    UserService.getAilmentListByDoctorLocation(res).then((response) => {
      this.setState({
        ailmentList: response.data
      });
    });
  };

  onSearchSubmit = (e) => {
    let { value, ailmentsDropDownValue } = this.state;
    e.preventDefault();
    console.log(value);
    console.log(ailmentsDropDownValue);

    UserService.getDoctorByLocationAndAilment(
      value,
      ailmentsDropDownValue
    ).then((response) => {
      this.setState({
        finalDoctorList: response.data
      });
    });
  };
  onChangeLocation = (e) => {
    this.setState({
      value: e.target.value
    });
    this.getAilments(e.target.value);
  };

  onChangeAilments = (e) => {
    this.setState({
      ailmentsDropDownValue: e.target.value
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
      active: false
    });
  };

  // Create "alert" for user if something went wrong

  render() {
    let {
      doctorLocationlist,
      ailmentList,
      bookingDate,
      bookingStartTime,
      bookingEndTime,
      dropDownLocation,
      finalDoctorList
    } = this.state;
    // Removes duplicates from the location list (the cities)
    let result2 = doctorLocationlist.map((result) => result.address.city);
    const finalDoctorLocationList = [
      ...new Map(result2.map((item) => [JSON.stringify(item), item])).values()
    ];

    // Remove duplicates from the ailmentList to print in the dropdown menu on the page
    // Then it flattens the array so all items gets put in to one array list.
    let result = ailmentList.map((result) => result.ailmentList);
    const flattedAilmentList = [
      ...new Map(
        result.flat().map((item) => [JSON.stringify(item), item])
      ).values()
    ];

    return (
      <div>
        <SearchForm
          onChangeAilments={this.onChangeAilments}
          onSearchSubmit={this.onSearchSubmit}
          onChangeLocation={this.onChangeLocation}
          bookingStartTime={bookingStartTime}
          bookingEndTime={bookingEndTime}
          bookingDate={bookingDate}
          finalDoctorLocationList={finalDoctorLocationList}
          flattedAilmentList={flattedAilmentList}
          dropDownLocation={dropDownLocation}
        />
        {/* Checks if the final doctor list is empty or not */}
        {/* If it is not empty it shows the SearchDoctorResult component */}
        {!!finalDoctorList ? (
          <SearchDoctorResult finalDoctorList={finalDoctorList} />
        ) : null}
      </div>
    );
  }
}
