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
      finalDoctorList,
      showAilmentList
    } = this.props;
    console.log(finalDoctorList);
    return (
      <React.Fragment>
        
        <div className="card">
          <form className="form" onSubmit={this.props.onSearchSubmit}>
            <div className="col-lg-12">
              <div className="form-group">
                <h3>Search for a doctor</h3>
                <div className="locationdrop">
                  <label>Choose a location:</label>
                  <select
                    className="form-control"
                    name="location"
                    defaultValue="1"
                    //                  value={this.state.value}
                    onChange={this.props.onChangeLocation}
                  >
                    <option value="1" disabled>
                      Select your location...
                    </option>
                    {finalDoctorLocationList.sort().map((list, key) => {
                      return (
                        <option value={list} key={key}>
                          {list}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  className="ailmentdrop"
                  style={
                    showAilmentList ? { display: "block" } : { display: "none" }
                  }
                >
                  <label>Choose an ailment:</label>
                  <select
                    className="form-control"
                    name="ailments"
                    defaultValue="1"
                    onChange={this.props.onChangeAilments}
                  >
                    <option value="1" disabled>
                      Select your Ailment...
                    </option>
                    {flattedAilmentList.sort().map((list, key) => {
                      return (
                        <option value={list} key={key}>
                          {list}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <input type="submit" value="submit" className="btn" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchForm;
