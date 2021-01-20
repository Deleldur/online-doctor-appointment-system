import React, { Component } from "react";

class SearchDoctorResult extends Component {
  render() {
    let { finalDoctorList } = this.props;
    console.log(finalDoctorList);
    return (
      <div className="row">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {finalDoctorList.map((list, key) => {
              return (
                <tr>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.phoneNumber}</td>
                  <td>{list.email}</td>
                  <td>{list.address.city}</td>
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
