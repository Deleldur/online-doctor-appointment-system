import React, { Component } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingDate: "",
      bookingStartTime: ""
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <form onSubmit={this.props.onSubmit}>
            <div className="col-lg-12">
              <h3>Create New Appointment</h3>
              <label>Date</label>
              <input
                type="date"
                className="col-12"
                value={this.props.bookingDate}
                onChange={this.props.onChangeBookingDate}
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
                onChange={this.props.onChangeBookingTime}
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

export default Calendar;
