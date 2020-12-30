import React, { Component } from "react";
import CourseApi from "./CourseApi";

class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      message: null,

    };
//    this.refreshCourses = this.refreshCourses.bind(this);

  }

  componentDidMount() {
    this.refreshCourses();
  }

  refreshCourses() {
    CourseApi.getAllCourses().then((response) => {
      this.setState({
        courses: response.data,
      });
    });
  }


  render() {
    return (
      <div className="container">
        <h3>All Patients</h3>
        <div className="container">
             {this.state.courses.map((course) => (
                <div>
                  <p>Name: {course.firstName} {course.lastName}</p> 
                  <p>Address: {course.address}</p>
                  <p>Phone: {course.phoneNumber}</p>
                  <p>----------------------------</p>
                </div>

              ))}
        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}

export default CoursesList;
