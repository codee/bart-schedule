import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStationEtd } from "../actions";
import { bindActionCreators } from "redux";

class StationsSelect extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  renderOptions() {
    if (this.props.stations.length === 0) return null;
    return this.props.stations.map(station => {
      return (
        <option key={station.abbr} value={station.abbr}>
          {station.name}
        </option>
      );
    });
  }
  onChange(e) {
    this.props.fetchStationEtd(e.target.value);
    // TODO: refactor this function to only change the state?
  }
  render() {
    return (
      <select className="form-control" onChange={this.onChange} defaultValue="">
        <option disabled value="">
          Select station
        </option>
        {this.renderOptions()}
      </select>
    );
  }
}

function mapStateToProps({ stations }) {
  return { stations };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchStationEtd }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationsSelect);
