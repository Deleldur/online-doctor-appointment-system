import React from "react";
import { Link } from "react-router-dom";

const CurrentAppointments = (props) => (
  <div className="table">
    <form className="tr">
      <span className="td">
        Booking date: {props.appointments.bookingDate}{" "}
      </span>
      <span className="td">
        Booking time {props.appointments.bookingStartTime}
      </span>
      <span className="td">Doctor name: xxxxxxx</span>
      <span className="td">
        <Link to="/appointment/">
          <button
            className="btn"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <span>Cancel</span>
          </button>
        </Link>
        <Link to={"/appointment/" + props.appointments.id}>
          <button
            className="btn"
            style={{ backgroundColor: "green", color: "white" }}
          >
            <span>Edit</span>
          </button>
        </Link>
      </span>
    </form>
  </div>
);

export default CurrentAppointments;
