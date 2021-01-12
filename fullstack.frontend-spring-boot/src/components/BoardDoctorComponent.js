import React, { Component } from "react";
//import { Link } from "react-router-dom";
import UserService from "../service/UserService";
/*
      {props.doctors.firstName} {props.doctors.lastName} {", Phone: "} {props.doctors.phoneNumber} {", City: "} {" "}
      <Link to={"/edit-category/" + props.doctors.id}>Edit</Link>
*/
const Doctors = (props) => (
  <div>
    <div>
        Email: {props.doctors.email}
    </div>
  </div>
);

const Appointments = (props) => (
  <div>
    <div>
      bookingdate: {props.appointments.bookingDate} - bookingtime: {props.appointments.bookingTime}
    </div>
  </div>
)
export default class BoardDoctorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: '',
      appointments: []
    };
  }

  doctorsList = () => {
      return <Doctors doctors={this.state.doctors} />;

  };

  appointmentList = () => {
    return this.state.appointments.map((currentAppointments, i) => {
      return <Appointments appointments={currentAppointments} key={i} />;
    });
  };


  componentDidMount() {
    UserService.getAppointments().then(
      response => {
        this.setState( {
          appointments: response.data
        })
      },
      error => {
        this.setState({
          content: (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        });
      }

    )
    UserService.getDoctorInfo().then(
      response => {
        this.setState({
          doctors: response.data
        });
      },
      error => {
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
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
        <header className="jumbotron">
        <h1>Appointments</h1>
        {this.appointmentList()}
        <h1>Doctors</h1>
          {this.doctorsList()}
        </header>
        </div>
      </div>
    );
  }
}
