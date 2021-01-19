import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
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

  render() {
    let {
      finalDoctorLocationList,
      flattedAilmentList,
      bookingDate,
      bookingStartTime,
      bookingEndTime,
      onChangeLocation,
      onChangeAilments,
      finalDoctorList
    } = this.props;
    console.log(finalDoctorList);
    return (
      <React.Fragment>
        <div className="card">
          <form onSubmit={this.props.onSearchSubmit}>
            <div className="col-lg-12">
              <div className="form-group">
                
                <h3>Search for doctor</h3>
               
                <label>Choose a location:</label>
                <select
                  className="form-control"
                  name="location"
                  //                  value={this.state.value}
                  onChange={this.props.onChangeLocation}
                >
                  {finalDoctorLocationList.sort().map((list, key) => {
                    return (
                      <option value={list} key={key}>
                        {list}
                      </option>
                    );
                  })}
                </select>
                <label>Choose an ailment:</label>
                <select
                  className="form-control"
                  name="ailments"
                  onChange={this.props.onChangeAilments}
                >
                  {flattedAilmentList.sort().map((list, key) => {
                    return (
                      <option value={list} key={key}>
                        {list}
                      </option>
                    );
                  })}
                </select>
              </div>

              <input type="submit" value="submit" className="btn" />
            </div>
          </form>
        </div>
        <div className="card">
          <form onSubmit={this.onSubmit}>
            <div className="col-lg-12">
              <h3>Create New Appointment</h3>
              <label>Date</label>
              <input
                type="date"
                className="col-12"
                value={this.props.bookingDate}
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
                value={this.props.bookingStartTime}
                onChange={this.onChangeBookingTime}
                // categoryDescription -> bookingTime
                // onChangeCategoryDescription -> onChangeBookingTime
              />
            </div>

            <input type="submit" value="Create appointment" className="btn" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchForm;
