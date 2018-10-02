import { FETCH_STATIONS } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_STATIONS:
      return action.payload.data.root.stations.station;
    default: break;
  }
  return state;
}