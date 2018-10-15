import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { fetchStations, fetchAdvisories } from "./actions";
import { connect } from "react-redux";
import ServiceAdvisories from "./components/service_advisories";
import StationsSelect from "./containers/stations_select";
import StationSchedules from "./containers/station_schedules";

class App extends Component {
  // TODO: Add state here, like which station is currently selected.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BART Schedule</h1>
        </header>
        <div className="container">
          <div>
            <ServiceAdvisories advisories={this.props.advisories} />
          </div>
          <div>
            <form className="">
              <div className="form-group">
                <StationsSelect />
              </div>
            </form>
          </div>
          <div>
            <StationSchedules />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchStations();
    this.props.fetchAdvisories();
  }
}

function mapStateToProps({ advisories }) {
  return { advisories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStations, fetchAdvisories }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
