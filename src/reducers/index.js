import { combineReducers } from 'redux';
import StationsReducer from './stations';
import AdvisoriessReducer from './advisories';
import StationInfoReducer from './station_info';

const rootReducer = combineReducers({
  stations: StationsReducer,
  advisories: AdvisoriessReducer,
  stationInfo: StationInfoReducer
});

export default rootReducer;