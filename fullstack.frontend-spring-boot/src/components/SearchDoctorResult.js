import React, { Component } from "react";

class SearchDoctorResult extends Component {
  render() {
    let { finalDoctorList } = this.props;
    console.log("Finaldoctorlist" + finalDoctorList);
    return (
      <div className="row">
        <h1>Doctor list</h1>
        <table style={{ color: "white" }} className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Book appointment</th>
            </tr>
          </thead>
          <tbody>
            {finalDoctorList.map((list, key) => {
              return (
                <tr key={key}>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.phoneNumber}</td>
                  <td>{list.email}</td>
                  <td>{list.address.city}</td>
                  <td>
                    <input
                      style={{ backgroundColor: "green", color: "white" }}
                      type="submit"
                      value="Choose doctor"
                      className="btn"
                      // doctor ID should be fired here so the backend can get the values for the calendar
                      //onSubmit=
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchDoctorResult;
