import React, { Component } from "react";
import axios from "axios";
import UserService from "../service/UserService";
import SearchForm from "./SearchForm";
import SearchDoctorResult from "./SearchDoctorResult";
import Calendar from "./Calendar";
import format from "date-fns/format";
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
      chosenDoctorId: "",
      allAppointmentsWithDoctorId: []
    };
  }
  componentDidMount() {
    this.loadUser();

    this.getDoctorLocations();
    // this.getAllAppointmentsWithDoctorId(this.state.chosenDoctor.id);
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
  getAllAppointmentsWithDoctorId = async (id) => {
    let appointments = await UserService.getAppointmentsFromDoctorId(id);
    //console.log("result inside " + JSON.stringify(res.data));
    for (let index = 0; index < appointments.data.length; index++) {
      // console.log(appointments.data[index].bookingDate);
      this.setState({
        allAppointmentsWithDoctorId: [
          ...this.state.allAppointmentsWithDoctorId,
          appointments.data[index].bookingDate +
            "T" +
            appointments.data[index].bookingStartTime
        ]
      });
    }

    // this.setState({
    //   allAppointmentsWithDoctorId: [
    //     ...this.state.allAppointmentsWithDoctorId,
    // currentArray.bookingDate +
    //   "T" +
    //   currentArray.bookingStartTime +
    //   ":00.000Z"
    //   ]
    // });
    //bookingDate, bookingStartTime
    //parseISO("2021-01-27T12:00:00.000Z"),

    // this.setState({
    //   allAppointmentsWithDoctorId: res.data
    // });
  };

  searchDoctorResultSubmit = async (id) => {
    UserService.getDoctorInfoById(id).then((res) => {
      const chosenDoctor = res.data;
      this.getAllAppointmentsWithDoctorId(chosenDoctor.id).then((res2) => {
        console.log("test res2: " + res2);
      });
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
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    // console.log(
    //   "BOOKING REQUEST  std: " + format(e.target.value, "yyyy-MM-dd")
    // );

    //    console.log("BOOKING REQUEST  std: " + format(startDate, "HH:mm"));
    // const newAppointment = {
    //   bookingStartTime: this.state.bookingStartTime,
    //   bookingEndTime: this.state.bookingEndTime,
    //   bookingDate: this.state.bookingDate,
    //   doctorInformation: {
    //     doctorId: this.state.chosenDoctor.id,
    //     doctorFirstName: this.state.chosenDoctor.firstName,
    //     doctorLastName: this.state.chosenDoctor.lastName
    //   },
    //   patientInformation: {
    //     patientId: this.state.patientId,
    //     patientFirstName: this.state.patientFirstName,
    //     patientLastName: this.state.patientLastName
    //   },
    //   active: this.state.active,
    //   ailmentsDropDownValue: this.state.ailmentsDropDownValue
    // };
    // console.log(newAppointment);
    // axios.post("http://localhost:3000/api/appointment/create/", newAppointment);
    // this.setState({
    //   bookingStartTime: "",
    //   bookingEndTime: "",
    //   bookingDate: "",
    //   chosenDoctorId: "",
    //   patientId: "",
    //   active: false
    // });
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
      showAilmentList,
      allAppointmentsWithDoctorId,
      chosenDoctor
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
    //    console.log(this.state.chosenDoctor);
    console.log("allAppointmentsWithDoctorId " + allAppointmentsWithDoctorId);
    return (
      <div className="row">
        <div className="col-lg-12">
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
            // bookingStartTime={bookingStartTime}
            // bookingEndTime={bookingEndTime}
            // onChangeBookingDate={this.onChangeBookingDate}
            // onChangeBookingTime={this.onChangeBookingTime}
            chosenDoctor={this.state.chosenDoctor}
            patientId={this.state.patientId}
            patientFirstName={this.state.patientFirstName}
            patientLastName={this.state.patientLastName}
            active={this.state.active}
            ailmentsDropDownValue={this.state.ailmentsDropDownValue}
            allAppointmentsWithDoctorId={allAppointmentsWithDoctorId}
          />
          {console.log("test : " + this.state.allAppointmentsWithDoctorId)}
        </div>
      </div>
    );
  }
}
