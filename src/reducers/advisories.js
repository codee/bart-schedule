import { FETCH_ADVISORIES } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ADVISORIES:
      return action.payload.data.root.bsa;
    default: break;
  }
  return state;
}