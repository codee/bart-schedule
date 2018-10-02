import React, { Component } from 'react';
import { connect } from 'react-redux';

class StationSchedules extends Component {
  renderRows(data) {
    console.log(data);
    if (data.length === 0) {
      return (
        <tr>
          <td colSpan={4}>No entries found.</td>
        </tr>
      )
    }
    return data.map(destination => (
      <tr key={ destination['abbreviation'] }>
        <th className="text-left">{ destination['destination'] }</th>
        <td width="50%" colSpan={3} className="p-0">
          <table className="table table-borderless">
            <tbody>
            { destination.estimate.map((estimate, index) => {
              return (
                <tr key={ index.toString() }>
                  <td width="20%"><span className="circle" style={{ backgroundColor: estimate['hexcolor'] }}></span></td>
                  <td width="40%">{ estimate['time'] }</td>
                  <td width="40%">{ estimate['platform'] }</td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-left">Destination</th>
              <td width="10%"></td>
              <th width="20%">Departure</th>
              <th width="20%">Platform</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRows(this.props.stationInfo) }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ stationInfo }) {
  return { stationInfo };
}

export default connect(mapStateToProps)(StationSchedules);