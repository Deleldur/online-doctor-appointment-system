import React, { Component } from "react";

class BookingRequests extends Component {

//------------------------- check this out later
  constructor(props) {
    super(props);
  }
//-------------------------

  render() {
    let { approveBookingRequest, appointments } = this.props;
    return (
      <div className="table">
        <form className="tr">
          <span className="td">Booking date: {appointments.bookingDate} </span>
          <span className="td">
            Booking time {appointments.bookingStartTime}
          </span>
          <span className="td">Patient name: xxxxxxx</span>
          <span className="td">
            <input
              type="submit"
              value="Deny"
              className="btn"
              style={{ backgroundColor: "red" }}
            />
            <input
              type="submit"
              value="Approve"
              className="btn"
              onClick={() => approveBookingRequest(appointments)}
              style={{ backgroundColor: "green" }}
            />
          </span>
        </form>
      </div>
    );
  }
}

export default BookingRequests;
