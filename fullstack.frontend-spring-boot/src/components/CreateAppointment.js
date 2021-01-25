import React, { Component } from "react";
import axios from "axios";
import UserService from "../service/UserService";
import SearchForm from "./SearchForm";
import SearchDoctorResult from "./SearchDoctorResult";
import Calendar from "./Calendar";
export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorLocationlist: [],
      ailmentList: [],
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      doctorId: "",
      patientId: "",
      patientFirstName: "",
      patientLastName: "",
      doctorFirstName: "",
      doctorLastName: "",
      active: false,
      dropDownLocation: "",
      ailmentsDropDownValue: "",
      locationDropDownValue: "",
      finalDoctorList: "",
      showAilmentList: false,
      chosenDoctor: "",
      chosenDoctorId: ""
    };
  }
  componentDidMount() {
    this.loadUser();

    this.getDoctorLocations();
  }

  loadUser = () => {
    UserService.getLoggedInPatientInfo().then((response) => {
      this.setState({
        patientId: response.data.id,
        patientFirstName: response.data.firstName,
        patientLastName: response.data.lastName
      });
    });
  };

  searchDoctorResultSubmit = (id) => {
    UserService.getDoctorInfoById(id).then((res) => {
      this.setState({
        chosenDoctor: res.data
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
    let { locationDropDownValue, ailmentsDropDownValue } = this.state;
    e.preventDefault();

    UserService.getDoctorByLocationAndAilment(
      locationDropDownValue,
      ailmentsDropDownValue
    ).then((response) => {
      this.setState({
        finalDoctorList: response.data
      });
    });
  };
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
  onChangeLocation = (e) => {
    this.setState({
      locationDropDownValue: e.target.value,
      showAilmentList: true
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

    const newAppointment = {
      bookingStartTime: this.state.bookingStartTime,
      bookingEndTime: this.state.bookingEndTime,
      bookingDate: this.state.bookingDate,
      doctorInformation: {
        doctorId: this.state.chosenDoctor.id,
        doctorFirstName: this.state.chosenDoctor.firstName,
        doctorLastName: this.state.chosenDoctor.lastName
      },
      patientInformation: {
        patientId: this.state.patientId,
        patientFirstName: this.state.patientFirstName,
        patientLastName: this.state.patientLastName
      },
      active: this.state.active,
      ailmentsDropDownValue: this.state.ailmentsDropDownValue
    };
    console.log(newAppointment);
    axios.post("http://localhost:3000/api/appointment/create/", newAppointment);
    this.setState({
      bookingStartTime: "",
      bookingEndTime: "",
      bookingDate: "",
      chosenDoctorId: "",
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
      finalDoctorList,
      showAilmentList
    } = this.state;
    // Removes null values (filter) and duplicates from the location list (the cities)
    let result2 = doctorLocationlist.map((result) => result.address.city);
    const finalDoctorLocationList = [
      ...new Map(
        result2
          .filter((x) => x != null)
          .map((item) => [JSON.stringify(item), item])
      ).values()
    ];

    // Remove duplicates from the ailmentList to print in the dropdown menu on the page
    // Then it flattens the array so all items gets put in to one array list.
    let result = ailmentList.map((result) => result.ailmentList);
    const flattedAilmentList = [
      ...new Map(
        result.flat().map((item) => [JSON.stringify(item), item])
      ).values()
    ];
    console.log(this.state.chosenDoctor);
    return (
      <div>
        {/* Sends props in to the Searchform */}
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
          showAilmentList={showAilmentList}
        />
        {/* Checks if the final doctor list is empty or not */}
        {/* If it is not empty it shows the SearchDoctorResult component */}
        {!!finalDoctorList ? (
          <SearchDoctorResult
            searchDoctorResultSubmit={this.searchDoctorResultSubmit}
            finalDoctorList={finalDoctorList}
          />
        ) : null}
        <Calendar
          bookingStartTime={bookingStartTime}
          bookingEndTime={bookingEndTime}
          onChangeBookingDate={this.onChangeBookingDate}
          onChangeBookingTime={this.onChangeBookingTime}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
